export interface WilayahItem {
  id: string;
  name: string;
}

export interface KodePosSuggestion {
  code: string;
  label: string;
}

// Complete list of all 38 Provinces in Indonesia
export const INDONESIAN_PROVINCES: WilayahItem[] = [
  { id: '11', name: 'Aceh' },
  { id: '12', name: 'Sumatera Utara' },
  { id: '13', name: 'Sumatera Barat' },
  { id: '14', name: 'Riau' },
  { id: '15', name: 'Jambi' },
  { id: '16', name: 'Sumatera Selatan' },
  { id: '17', name: 'Bengkulu' },
  { id: '18', name: 'Lampung' },
  { id: '19', name: 'Kepulauan Bangka Belitung' },
  { id: '21', name: 'Kepulauan Riau' },
  { id: '31', name: 'DKI Jakarta' },
  { id: '32', name: 'Jawa Barat' },
  { id: '33', name: 'Jawa Tengah' },
  { id: '34', name: 'DI Yogyakarta' },
  { id: '35', name: 'Jawa Timur' },
  { id: '36', name: 'Banten' },
  { id: '51', name: 'Bali' },
  { id: '52', name: 'Nusa Tenggara Barat' },
  { id: '53', name: 'Nusa Tenggara Timur' },
  { id: '61', name: 'Kalimantan Barat' },
  { id: '62', name: 'Kalimantan Tengah' },
  { id: '63', name: 'Kalimantan Selatan' },
  { id: '64', name: 'Kalimantan Timur' },
  { id: '65', name: 'Kalimantan Utara' },
  { id: '71', name: 'Sulawesi Utara' },
  { id: '72', name: 'Sulawesi Tengah' },
  { id: '73', name: 'Sulawesi Selatan' },
  { id: '74', name: 'Sulawesi Tenggara' },
  { id: '75', name: 'Gorontalo' },
  { id: '76', name: 'Sulawesi Barat' },
  { id: '81', name: 'Maluku' },
  { id: '82', name: 'Maluku Utara' },
  { id: '91', name: 'Papua Barat' },
  { id: '92', name: 'Papua Barat Daya' },
  { id: '94', name: 'Papua' },
  { id: '95', name: 'Papua Selatan' },
  { id: '96', name: 'Papua Tengah' },
  { id: '97', name: 'Papua Pegunungan' },
];

// Postal code zone prefixes by province ID for fallback suggestions
const PROVINCE_POSTAL_PREFIX: Record<string, string[]> = {
  '11': ['23111', '23115', '23242', '24111', '24311'],
  '12': ['20111', '20112', '20212', '20711', '21111'],
  '13': ['25111', '25115', '25211', '26111', '27111'],
  '14': ['28111', '28112', '28281', '28811', '29211'],
  '15': ['36111', '36122', '36135', '37111', '37211'],
  '16': ['30111', '30113', '30126', '31111', '32111'],
  '17': ['38113', '38119', '38221', '39111', '39211'],
  '18': ['35111', '35118', '35145', '34111', '34511'],
  '19': ['33111', '33121', '33211', '33411', '33511'],
  '21': ['29111', '29122', '29411', '29432', '29461'],
  '31': ['10110', '11110', '12110', '13110', '14110'],
  '32': ['40111', '40115', '41111', '45111', '16111', '17111'],
  '33': ['50111', '57111', '59111', '59311', '59317', '53111'],
  '34': ['55111', '55122', '55221', '55281', '55511'],
  '35': ['60111', '60241', '61211', '64111', '65111'],
  '36': ['15111', '15221', '15310', '42111', '42411'],
  '51': ['80111', '80113', '80221', '80361', '80511'],
  '52': ['83111', '83121', '83211', '84111', '84211'],
  '53': ['85111', '85112', '85228', '86111', '87111'],
  '61': ['78111', '78116', '78211', '79111', '79211'],
  '62': ['73111', '73112', '74111', '74311', '74811'],
  '63': ['70111', '70114', '70231', '70711', '71111'],
  '64': ['75111', '75117', '76111', '76114', '75311'],
  '65': ['77111', '77113', '77211', '77411', '77511'],
  '71': ['95111', '95115', '95211', '95511', '95711'],
  '72': ['94111', '94112', '94221', '94311', '94711'],
  '73': ['90111', '90115', '90221', '91111', '92111'],
  '74': ['93111', '93117', '93211', '93611', '93711'],
  '75': ['96111', '96115', '96128', '96211', '96311'],
  '76': ['91311', '91315', '91411', '91511', '91611'],
  '81': ['97111', '97115', '97211', '97511', '97611'],
  '82': ['97711', '97714', '97721', '97811', '97911'],
  '91': ['98311', '98315', '98511', '98611'],
  '92': ['98411', '98414', '98416', '98451'],
  '94': ['99111', '99112', '99221', '99311'],
  '95': ['99611', '99613', '99616', '99711'],
  '96': ['98811', '98815', '99911', '99915'],
  '97': ['99511', '99515', '99551'],
};

// Map new Papua provinces to their parent emsifa regency IDs
const NEW_PAPUA_REGENCIES: Record<string, WilayahItem[]> = {
  '92': [
    { id: '9171', name: 'Kota Sorong' },
    { id: '9107', name: 'Kab. Sorong' },
    { id: '9106', name: 'Kab. Sorong Selatan' },
    { id: '9108', name: 'Kab. Raja Ampat' },
    { id: '9109', name: 'Kab. Tambrauw' },
    { id: '9110', name: 'Kab. Maybrat' },
  ],
  '95': [
    { id: '9401', name: 'Kab. Merauke' },
    { id: '9413', name: 'Kab. Boven Digoel' },
    { id: '9414', name: 'Kab. Mappi' },
    { id: '9415', name: 'Kab. Asmat' },
  ],
  '96': [
    { id: '9404', name: 'Kab. Nabire' },
    { id: '9412', name: 'Kab. Mimika' },
    { id: '9410', name: 'Kab. Paniai' },
    { id: '9411', name: 'Kab. Puncak Jaya' },
    { id: '9433', name: 'Kab. Puncak' },
    { id: '9434', name: 'Kab. Dogiyai' },
    { id: '9435', name: 'Kab. Intan Jaya' },
    { id: '9436', name: 'Kab. Deiyai' },
  ],
  '97': [
    { id: '9402', name: 'Kab. Jayawijaya' },
    { id: '9416', name: 'Kab. Yahukimo' },
    { id: '9417', name: 'Kab. Pegunungan Bintang' },
    { id: '9418', name: 'Kab. Tolikara' },
    { id: '9429', name: 'Kab. Nduga' },
    { id: '9430', name: 'Kab. Lanny Jaya' },
    { id: '9431', name: 'Kab. Mamberamo Tengah' },
    { id: '9432', name: 'Kab. Yalimo' },
  ],
};

function formatWilayahName(raw: string): string {
  const trimmed = raw.trim();
  if (/^DKI\s+/i.test(trimmed)) return 'DKI Jakarta';
  if (/^DI\s+/i.test(trimmed)) return 'DI Yogyakarta';

  const words = trimmed.toLowerCase().split(/\s+/);
  return words
    .map((w, idx) => {
      if (idx === 0 && w === 'kabupaten') return 'Kab.';
      if (w === 'dki' || w === 'di') return w.toUpperCase();
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(' ');
}

const regencyCache = new Map<string, WilayahItem[]>();
const districtCache = new Map<string, WilayahItem[]>();
const villageCache = new Map<string, WilayahItem[]>();

async function fetchJsonWithFallback<T>(path: string): Promise<T | null> {
  const urls = [
    `https://www.emsifa.com/api-wilayah-indonesia/api/${path}`,
    `https://cdn.jsdelivr.net/gh/emsifa/api-wilayah-indonesia@master/static/api/${path}`,
  ];
  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        return (await res.json()) as T;
      }
    } catch {
      // Try next mirror
    }
  }
  return null;
}

export async function fetchRegenciesByProvince(provinceId: string): Promise<WilayahItem[]> {
  if (regencyCache.has(provinceId)) {
    return regencyCache.get(provinceId)!;
  }
  if (NEW_PAPUA_REGENCIES[provinceId]) {
    regencyCache.set(provinceId, NEW_PAPUA_REGENCIES[provinceId]);
    return NEW_PAPUA_REGENCIES[provinceId];
  }

  const data = await fetchJsonWithFallback<Array<{ id: string; name: string }>>(
    `regencies/${provinceId}.json`
  );
  if (!data) return [];

  const formatted = data.map((item) => ({
    id: String(item.id),
    name: formatWilayahName(item.name),
  }));
  regencyCache.set(provinceId, formatted);
  return formatted;
}

export async function fetchDistrictsByRegency(regencyId: string): Promise<WilayahItem[]> {
  if (districtCache.has(regencyId)) {
    return districtCache.get(regencyId)!;
  }

  const data = await fetchJsonWithFallback<Array<{ id: string; name: string }>>(
    `districts/${regencyId}.json`
  );
  if (!data) return [];

  const formatted = data.map((item) => ({
    id: String(item.id),
    name: formatWilayahName(item.name),
  }));
  districtCache.set(regencyId, formatted);
  return formatted;
}

export async function fetchVillagesByDistrict(districtId: string): Promise<WilayahItem[]> {
  if (villageCache.has(districtId)) {
    return villageCache.get(districtId)!;
  }

  const data = await fetchJsonWithFallback<Array<{ id: string; name: string }>>(
    `villages/${districtId}.json`
  );
  if (!data) return [];

  const formatted = data.map((item) => ({
    id: String(item.id),
    name: formatWilayahName(item.name),
  }));
  villageCache.set(districtId, formatted);
  return formatted;
}

interface KodePosApiRow {
  code: number | string;
  village: string;
  district: string;
  regency: string;
  province: string;
}

export async function fetchKodePosSuggestions(params: {
  provinceId?: string;
  provinsi?: string;
  kotaKabupaten?: string;
  kecamatan?: string;
  kelurahanDesa?: string;
}): Promise<KodePosSuggestion[]> {
  const cleanRegency = (params.kotaKabupaten || '')
    .replace(/^(kab\.|kabupaten|kota)\s+/i, '')
    .trim()
    .toLowerCase();
  const cleanDistrict = (params.kecamatan || '').trim().toLowerCase();
  const cleanVillage = (params.kelurahanDesa || '').trim().toLowerCase();

  const queries: string[] = [];
  if (cleanVillage) queries.push(cleanVillage);
  if (cleanDistrict && cleanDistrict !== cleanVillage) queries.push(cleanDistrict);
  if (cleanRegency && queries.length === 0) queries.push(cleanRegency);

  const results: KodePosSuggestion[] = [];
  const seenCodes = new Set<string>();

  for (const q of queries) {
    try {
      const res = await fetch(
        `https://kodepos.vercel.app/search/?q=${encodeURIComponent(q)}`
      );
      if (!res.ok) continue;
      const json = (await res.json()) as { data?: KodePosApiRow[] };
      const rows = Array.isArray(json.data) ? json.data : [];

      // Prioritize rows matching the selected regency and district
      const scored = rows
        .map((row) => {
          let score = 0;
          const rReg = (row.regency || '').toLowerCase();
          const rDist = (row.district || '').toLowerCase();
          const rVil = (row.village || '').toLowerCase();
          if (cleanRegency && rReg.includes(cleanRegency)) score += 4;
          if (cleanDistrict && rDist.includes(cleanDistrict)) score += 3;
          if (cleanVillage && rVil === cleanVillage) score += 5;
          else if (cleanVillage && rVil.includes(cleanVillage)) score += 2;
          return { row, score };
        })
        .filter((item) => (cleanRegency ? item.score >= 3 : item.score >= 1))
        .sort((a, b) => b.score - a.score);

      for (const { row } of scored) {
        const codeStr = String(row.code);
        if (!seenCodes.has(codeStr)) {
          seenCodes.add(codeStr);
          results.push({
            code: codeStr,
            label: `${codeStr} — Kel. ${row.village}, Kec. ${row.district}, ${row.regency}`,
          });
        }
        if (results.length >= 12) break;
      }
      if (results.length > 0) break;
    } catch {
      // Continue to fallback
    }
  }

  // Fallback to regional postal prefixes if API didn't return matches
  if (results.length === 0 && params.provinceId) {
    const prefixes = PROVINCE_POSTAL_PREFIX[params.provinceId] || ['10110', '50111', '59317'];
    const areaSuffix =
      [params.kelurahanDesa, params.kecamatan, params.kotaKabupaten]
        .filter(Boolean)
        .join(', ') || params.provinsi || 'Indonesia';
    for (const code of prefixes) {
      results.push({
        code,
        label: `${code} — ${areaSuffix}`,
      });
    }
  }

  return results;
}
