export interface Product {
  id: string;
  nameEn: string;
  nameId: string;
  specificationEn: string;
  specificationId: string;
}

export const products: Product[] = [
  {
    id: 'log-balok-sengon',
    nameEn: 'LOG, BALOK & BALKEN SENGON',
    nameId: 'LOG, BALOK & BALKEN SENGON',
    specificationEn: `We also accept supply of Log / round wood, balken, balok / sawn timber especially for sengon or albasia and jabon wood in large quantities with the following specifications:

1. Log / Round Wood
   a. For Albasia & Jabon
      Length: 130 cm – 260 cm
      Diameter: 18 – 30 cm
   b. For Wadang, Jimitri, Waru, Durian
      Length: 100, 110, 130 cm
      Diameter: 10 cm & up

2. Balken, Balok / Sawn Timber
   Wood: Albasia, Jimitri, Wadang and Mahoni
   Length: 100, 110, 120, 130
   Thickness: 5.0 & 5.5 cm
   Width: 6, 8, 10, 12, 14, etc (multiples of 2 cm)

For more detailed information, please contact our Purchasing Department.`,
    specificationId: `Kami juga menerima supply Log / kayu bulat, balken, balok / sawn timber terutama untuk sengon atau albasia dan kayu jabon dalam jumlah besar dengan spesifikasi sebagai berikut:

1. Log / Kayu Bulat
   a. Untuk Albasia & Jabon
      Panjang: 130 cm – 260 cm
      Diameter: 18 – 30 cm
   b. Untuk Wadang, Jimitri, Waru, Durian
      Panjang: 100, 110, 130 cm
      Diameter: 10 cm & up

2. Balken, Balok / Sawn Timber
   Kayu: Albasia, Jimitri, Wadang dan Mahoni
   Panjang: 100, 110, 120, 130
   Tebal: 5.0 & 5.5 cm
   Lebar: 6, 8, 10, 12, 14, dst (kelipatan 2 cm)

Informasi lebih rinci, mohon hubungi Purchasing Department.`,
  },
  {
    id: 'lvl',
    nameEn: 'LVL / Laminated Veneer Lumber',
    nameId: 'LVL / Laminated Veneer Lumber',
    specificationEn: `Dimensions: 1220 mm x 2440 mm (4' x 8')
             1220 mm x 1220 mm (4' x 4')
• Thickness: As requested
• Core: Albasia (Albizia falcataria)
• Face & back: Albasia (Albizia falcataria) / MLH (Mix Light Hardwood)
• Grade: OVL / BB/CC grade / UTY
• Glue: MR / Melamine / WBP / LFE
• Finishing: Sanding both sides
• Application: Furniture, building materials, boxes, cabinets, etc.`,
    specificationId: `Dimensi: 1220 mm x 2440 mm (4' x 8')
        1220 mm x 1220 mm (4' x 4')
• Tebal: Sesuai permintaan
• Inti: Albasia (Albizia falcataria)
• Face & back: Albasia (Albizia falcataria) / MLH (Mix Light Hardwood)
• Grade: OVL / BB/CC grade / UTY
• Lem: MR / Melamine / WBP / LFE
• Finishing: Sanding dua sisi
• Application: Mebel, bahan bangunan, box, lemari, dll.`,
  },
  {
    id: 'platform',
    nameEn: 'Platform',
    nameId: 'Platform',
    specificationEn: `Dimensions: 1220 mm x 2440 mm (4' x 8')
             915 mm x 1830 mm (3' x 6')
• Thickness: 15 mm / 18 mm / 21 mm
• Core & veneer layers: Albasia / Albizia falcataria
• Glue: MR / Melamine / WBP / LFE
• Finishing: Sanding both sides / Non sanding
• Application: Furniture, building materials, boxes, shelves & cabinets.`,
    specificationId: `Dimensi: 1220 mm x 2440 mm (4' x 8')
        915 mm x 1830 mm (3' x 6')
• Tebal: 15 mm / 18 mm / 21 mm
• Inti & lapisan veneer: Albasiah / Albizia falcataria
• Lem: MR / Melamine / WBP / LFE
• Finishing: Sanding dua sisi / Non sanding
• Applikasi: Furniture, bahan bangunan, box, rak & lemari.`,
  },
  {
    id: 'ordinary-plywood',
    nameEn: 'Ordinary Plywood',
    nameId: 'Ordinary Plywood',
    specificationEn: `Dimensions: 1220 mm x 2440 mm (4' x 8')
             1220 mm x 1220 mm (4' x 4')
• Thickness: As requested
• Core: Albasia / Sengon
• Face & back: Albasia (Sengon) / MLH (Mix Light Hardwood)
• Glue: MR / Melamine / WBP / LFE
• Grade: OVL / BB/CC grade / UTY
• Finishing: Sanding both sides / Sanding one side
• Application: Building materials, furniture, boxes, pallets, shelves, etc.`,
    specificationId: `Dimensi: 1220 mm x 2440 mm (4' x 8')
        1220 mm x 1220 mm (4' x 4')
• Tebal: Sesuai permintaan
• Inti: Albasia / Sengon
• Face & back: Albasia (Sengon) / MLH (Mix Light Hardwood)
• Lem: MR / Melamine / WBP / LFE
• Grade: OVL / BB/CC grade / UTY
• Finishing: Sanding dua sisi / Sanding satu sisi
• Applikasi: Bahan bangunan, mebel, box, pallet, rak, etc.`,
  },
  {
    id: 'falcata-veneer',
    nameEn: 'Falcata Veneer',
    nameId: 'Falcata Veneer',
    specificationEn: `Albasia Veneer
Material: Albasia / Sengon
Thickness: As requested
Size: 1220 mm x 2440 mm
Grade: OVL BTR / BB/CC / As request
MC: below 12%
Density: 360 Kg / M3`,
    specificationId: `Veneer Albasia
Material: Albasia / Sengon
Tebal: Sesuai permintaan
Ukuran: 1220 mm x 2440 mm
Grade: OVL BTR / BB/CC / As request
MC: di bawah 12 %
Berat Jenis: 360 Kg / M3`,
  },
  {
    id: 'ordinary-blockboard',
    nameEn: 'Ordinary Blockboard',
    nameId: 'Ordinary Blockboard',
    specificationEn: `Dimensions: 1220 mm x 2440 mm (4' x 8')
             915 mm x 1830 mm (3' x 6')
• Thickness: 15 / 18 / 21 / 24 mm / as requested
• Core: Albasia / Falcata
• Face & back: Albasia (Albizia falcataria) / MLH (Mix Light Hardwood)
• Glue: MR / Melamine / WBP / LFE
• Finishing: Sanding both sides
• Grade: OVL Better / BB/CC grade / Utility grade
• Application: Furniture, building materials, boxes, shelves & cabinets, etc.`,
    specificationId: `Dimensi: 1220 mm x 2440 mm (4' x 8')
        915 mm x 1830 mm (3' x 6')
• Tebal: 15 / 18 / 21 / 24 mm / sesuai permintaan
• Inti: Albasia / Falcata
• Face & back: Albasia (Albizia falcataria) / MLH (Mix Light Hardwood)
• Lem: MR / Melamine / WBP / LFE
• Finishing: Sanding dua sisi
• Grade: OVL Better / BB/CC grade / Utility grade
• Applikasi: Mebel, bahan bangunan, kotak, rak & lemari, dll.`,
  },
  {
    id: 'lamin-board',
    nameEn: 'Lamin Board',
    nameId: 'Lamin Board',
    specificationEn: `Dimensions: 1220 mm x 2440 mm (4' x 8')
• Thickness: 18 mm / as requested
• Core: Albasia (Albizia falcataria)
• Face & back: Albasia (Albizia falcataria) / MLH (Mix Light Hardwood)
• Glue: MR / Melamine / WBP / LFE
• Grade: OVL / BB/CC grade / UTY
• Finishing: Sanding both sides
• Application: Furniture, building materials, boxes, shelves, cabinets, etc.`,
    specificationId: `Dimensi: 1220 mm x 2440 mm (4' x 8')
• Tebal: 18 mm / sesuai permintaan
• Inti: Albasia (Albizia falcataria)
• Face & back: Albasia (Albizia falcataria) / MLH (Mix Light Hardwood)
• Lem: MR / Melamine / WBP / LFE
• Grade: OVL / BB/CC grade / UTY
• Finishing: Sanding dua sisi
• Aplikasi: Mebel, bahan bangunan, kotak, rak, lemari, dll.`,
  },
  {
    id: 'packing-plywood',
    nameEn: 'Packing Grade Plywood',
    nameId: 'Packing Grade Plywood',
    specificationEn: `Dimensions: 1220 mm x 2440 mm (4' x 8')
• Thickness: 8 / 12 / 15 / 18 mm
• Core: Albasia (Albizia falcataria)
• Face & back: Albasia (Albizia falcataria)
• Glue: MR (Moisture Resistant)
• Finishing: Non Sanding & Sanding`,
    specificationId: `Dimensi: 1220 mm x 2440 mm (4' x 8')
• Tebal: 8 / 12 / 15 / 18 mm
• Inti: Albasia (Albizia falcataria)
• Face & back: Albasia (Albizia falcataria)
• Lem: MR (Moisture Resistant)
• Finishing: Non Sanding & Sanding`,
  },
];
