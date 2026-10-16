// Static portfolio data — CMS integration removed, edit directly here.
//
// Copy is grounded in the two shipped storefronts (see
// public/images/work/*.webp) and their build briefs. No unverifiable metrics,
// client identities, or performance numbers are claimed.
export type WorkStackItem = { name: string; role: string };

export type WorkProject = {
  slug: string;
  /** Short brand name used in listings and tabs. */
  name: string;
  /** Full display title used on cards and the case-study page. */
  title: string;
  category: string;
  year: string;
  /** One-paragraph summary for the portfolio listing. */
  summary: string;
  cover: string;
  coverAlt: string;
  /** Live project URL (the "Visit Live Project" CTA target). */
  url: string;
  seoTitle: string;
  metaDescription: string;
  stack: WorkStackItem[];
  overview: string[];
  challenge: string[];
  approach: string[];
  /** Concrete deliverables — rendered as a checklist. */
  built: string[];
  outcome: string[];
};

export const WORK: WorkProject[] = [
  {
    slug: "myart",
    name: "MyArt",
    title: "MyArt: Website Shopify Premium untuk Komisi Ilustrasi",
    category: "Shopify Storefront",
    year: "2025",
    summary:
      "Storefront (etalase toko online) Shopify untuk ilustrator: galeri karya yang tertata, alur komisi yang jelas, dan halaman layanan serta FAQ yang menjawab pertanyaan calon klien sebelum menghubungi.",
    cover: "/images/work/project-wellness.webp",
    coverAlt:
      "Halaman showcase MyArt dengan carousel karya unggulan dan galeri ilustrasi di bawahnya",
    url: "https://test-ihmol6aj.myshopify.com/",
    seoTitle: "MyArt – Studi Kasus Website Shopify Ilustrator | Ilmantara",
    metaDescription:
      "Studi kasus MyArt: website Shopify premium untuk ilustrator dengan galeri karya, halaman layanan, FAQ, dan alur komisi yang rapi. Dibangun Ilmantara dari Yogyakarta.",
    stack: [
      { name: "Shopify", role: "Storefront, katalog, dan checkout (proses pembayaran)" },
      { name: "Liquid", role: "Bahasa templat (templating language) Shopify untuk tema kustom dan komponen galeri" },
    ],
    overview: [
      "MyArt adalah storefront Shopify untuk seorang ilustrator yang membuka slot komisi karya digital. Tujuannya satu: membuat karya terlihat sepremium mungkin sekaligus memudahkan calon klien memahami cara memesan.",
      "Situs menyatukan galeri karya, halaman layanan, syarat & ketentuan komisi (TOS), FAQ, dan kontak dalam satu alur. Audiensnya komunitas penggemar ilustrasi dan pelanggan komisi yang terbiasa memesan lewat media sosial, sehingga situs harus terasa lebih rapi dan meyakinkan daripada sebuah feed.",
    ],
    challenge: [
      "Ilustrasi hidup dari visual. Tantangan utamanya menampilkan banyak karya beresolusi tinggi tanpa membuat halaman terasa berat atau berantakan.",
      "Calon klien sering datang dengan pertanyaan yang sama seputar harga, revisi, dan aturan komisi. Tanpa halaman TOS dan FAQ yang jelas, pertanyaan itu berulang di DM dan memperlambat proses pemesanan.",
      "Kebutuhan kustom seperti penataan showcase (galeri karya) dan pengelolaan paket komisi tidak semuanya bisa ditangani komponen bawaan tema Shopify, sehingga sebagian tampilan dan alur perlu dibangun khusus langsung di tema.",
    ],
    approach: [
      "Kami memulai dari struktur informasi: memisahkan showcase (karya selesai), service (paket komisi), dan TOS agar pengunjung tahu persis langkah memesan.",
      "Tema Shopify dibangun kustom dengan komponen galeri yang konsisten, sementara alur showcase dan paket komisi yang di luar jangkauan fitur bawaan disesuaikan langsung di dalam tema agar situs tetap ringan dan mudah dirawat.",
      "Fokus desain ada pada hierarki: karya jadi bintang utama, teks pendukung dibuat ringkas, dan setiap bagian mengarahkan pengunjung menuju pemesanan.",
    ],
    built: [
      "Homepage dengan carousel (galeri geser) karya unggulan dan sorotan proyek terbaru",
      "Galeri showcase dengan grid karya yang tertata dan pemuatan bertahap",
      "Halaman layanan yang memecah paket komisi dan rincian isinya",
      "Halaman TOS dan FAQ untuk menjawab aturan komisi tanpa lewat DM",
      "Halaman About untuk memperkenalkan seniman di balik karya",
      "Navigasi dan keranjang bawaan Shopify plus alur pengelolaan khusus",
    ],
    outcome: [
      "Hasilnya storefront yang menampilkan karya secara premium sekaligus mengurangi pertanyaan berulang: calon klien bisa membaca paket, aturan, dan FAQ sebelum menghubungi.",
      "Struktur yang rapi juga memudahkan seniman memperbarui karya lewat dashboard (panel kendali), sehingga showcase tetap relevan tanpa menyentuh kode.",
    ],
  },
  {
    slug: "miseart",
    name: "Mise",
    title: "Mise: Storefront Shopify dengan Avatar VRM Berpelacak Wajah",
    category: "Shopify Storefront",
    year: "2025",
    summary:
      "Storefront (etalase toko online) Shopify seni komisi yang dibedakan lewat avatar VRM (model karakter 3D) di hero (bagian teratas halaman): avatar mengikuti wajah pengunjung, membuat kunjungan pertama terasa personal dan sulit dilupakan.",
    cover: "/images/work/project-vrm.webp",
    coverAlt:
      "Hero situs Mise dengan avatar VRM di atas latar grid oranye dan marquee bertuliskan Welcome to my little corner!",
    url: "https://mise-u5ukp4yf.myshopify.com",
    seoTitle: "Mise – Studi Kasus Shopify dengan Avatar VRM | Ilmantara",
    metaDescription:
      "Studi kasus Mise: website Shopify seni komisi dengan avatar VRM berpelacak wajah di hero. Cara Ilmantara membuat storefront terasa personal, interaktif, dan tetap ringan.",
    stack: [
      { name: "Shopify", role: "Storefront, katalog, dan checkout (proses pembayaran)" },
      { name: "Liquid", role: "Bahasa templat (templating language) Shopify untuk tema kustom dan section (bagian) interaktif" },
      { name: "VRM", role: "Format avatar 3D yang tampil sebagai wajah brand di hero" },
      { name: "Pelacakan wajah", role: "Deteksi gerak wajah real-time (langsung/seketika) di browser agar avatar mengikuti pengunjung" },
    ],
    overview: [
      "Mise adalah storefront Shopify seni komisi milik seorang ilustrator karakter. Yang membedakannya: alih-alih hero statis, halaman utama menampilkan avatar VRM yang mengikuti wajah pengunjung.",
      "Situs juga memuat halaman About, Showcase, Service, FAQ, TOS, dan Kontak, plus marquee (teks berjalan) bertuliskan 'Welcome to my little corner!' yang memberi karakter pada brand.",
      "Audiensnya komunitas yang menilai brand dari kepribadian, jadi pengalaman pertama di situs harus terasa menyenangkan dan personal, tanpa mengorbankan kejelasan informasi.",
    ],
    challenge: [
      "Komisi ilustrasi penuh pesaing dengan tampilan yang mirip. Tantangannya membuat kunjungan pertama langsung membekas tanpa mengorbankan kejelasan informasi.",
      "Avatar 3D harus berjalan mulus di browser tanpa memaksa menyalakan kamera atau mengganggu privasi, dan tetap punya tampilan cadangan bila perangkat tidak mendukung.",
      "Seluruhnya harus tetap terasa sebagai toko Shopify yang cepat dan bisa diandalkan, bukan sekadar demo teknologi.",
    ],
    approach: [
      "Kami menempatkan avatar VRM sebagai titik fokus hero: ketika pengunjung mengizinkan kamera, avatar mengikuti arah wajahnya; bila tidak, avatar tetap tampil sebagai ilustrasi hidup.",
      "Informasi utama (showcase, service, FAQ, dan TOS) disusun rapi di bawahnya agar situs tetap berfungsi sebagai toko, bukan sekadar gimmick.",
      "Gaya visual dibuat playful: latar grid, marquee berjalan, dan tipografi tebal yang konsisten dengan kepribadian brand.",
    ],
    built: [
      "Hero dengan avatar VRM yang melakukan pelacakan wajah pengunjung secara real-time",
      "Perilaku cadangan yang ramah privasi ketika akses kamera ditolak atau tidak tersedia",
      "Marquee berjalan 'Welcome to my little corner!' sebagai elemen brand",
      "Halaman Showcase untuk galeri karya dan About untuk profil seniman",
      "Halaman Service, FAQ, dan TOS untuk alur komisi yang jelas",
      "Section bukti sosial dan kontak yang terintegrasi dengan storefront Shopify",
    ],
    outcome: [
      "Hero interaktif memberi Mise pembeda yang sulit ditiru template biasa, sekaligus tetap menjalankan fungsi toko Shopify sehari-hari.",
      "Struktur halaman menjaga pengunjung tetap dapat menemukan karya, layanan, dan aturan komisi dengan mudah, sehingga pengalaman interaktif tidak mengorbankan kejelasan.",
    ],
  },
];

export function getWork(slug: string): WorkProject | undefined {
  return WORK.find((project) => project.slug === slug);
}

/** Other projects to link to from a case study, most recent first. */
export function relatedWork(slug: string, limit = 3): WorkProject[] {
  return WORK.filter((project) => project.slug !== slug).slice(0, limit);
}
