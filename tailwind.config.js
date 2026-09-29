/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: '#F7F3EB',
        travertine: '#EDE6D8',
        cashmere: '#E2D9C8',
        obsidian: '#1C1815',
        onyx: '#26211D',
        espresso: '#382F27',
        champagne: '#B89452',
        brass: '#96753A',
        taupe: '#7E7468',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Fahkwang"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'luxury': 'cubic-bezier(0.76, 0, 0.24, 1)',
      }
    },
  },
  plugins: [],
}
