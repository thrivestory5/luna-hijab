import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const SilkCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 3.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    container.appendChild(renderer.domElement);

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uColorA: { value: new THREE.Color('#F6F3EC') },
      uColorB: { value: new THREE.Color('#E8DEC8') },
      uColorGold: { value: new THREE.Color('#C5A059') },
    };

    const vertexShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      varying vec2 vUv;
      varying float vElevation;

      void main() {
        vUv = uv;
        vec3 pos = position;

        float dist = distance(uv, uMouse);
        float mouseWave = sin(dist * 12.0 - uTime * 2.2) * exp(-dist * 3.5) * 0.12;

        float wave1 = sin(pos.x * 2.2 + uTime * 0.65) * 0.11;
        float wave2 = cos(pos.y * 2.8 + uTime * 0.55) * 0.09;
        float wave3 = sin((pos.x + pos.y) * 3.4 - uTime * 0.4) * 0.05;

        pos.z += wave1 + wave2 + wave3 + mouseWave;
        vElevation = pos.z;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    const fragmentShader = `
      uniform vec3 uColorA;
      uniform vec3 uColorB;
      uniform vec3 uColorGold;
      varying vec2 vUv;
      varying float vElevation;

      void main() {
        float mixStrength = smoothstep(-0.22, 0.25, vElevation);
        vec3 baseColor = mix(uColorA, uColorB, mixStrength);
        float sheen = smoothstep(0.12, 0.26, vElevation) * 0.28;
        vec3 finalColor = mix(baseColor, uColorGold, sheen);
        gl_FragColor = vec4(finalColor, 0.65);
      }
    `;

    const geometry = new THREE.PlaneGeometry(6.5, 4.5, 64, 64);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -0.18;
    scene.add(mesh);

    let isVisible = true;
    let frameId = 0;
    const clock = new THREE.Clock();

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      uniforms.uMouse.value.lerp(new THREE.Vector2(x, y), 0.15);
    };

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', onResize);

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!isVisible) return;
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none overflow-hidden opacity-90"
      aria-hidden="true"
    />
  );
};
