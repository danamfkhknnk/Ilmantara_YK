// Static journal content — CMS integration removed, edit directly here.
// Ported from the reference journal export (layout, copy, covers).
export type JournalPost = {
  slug: string;
  title: string;
  tag: string;
  date: string;
  readTime: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  body: string[];
};

export const POSTS: JournalPost[] = [
  {
    slug: "biaya-pembuatan-website-jogja-2026",
    title: "Biaya Pembuatan Website di Jogja 2026: Panduan Jujur",
    tag: "Biaya",
    date: "13 Okt 2026",
    readTime: "6 mnt baca",
    excerpt: "Berapa biaya pembuatan website di Jogja tahun ini? Rincian komponen biayanya — dari domain sampai fitur — agar Anda tidak salah budget.",
    cover: "/images/journal/prototype.jpg",
    coverAlt: "Biaya pembuatan website di Jogja 2026",
    body: [
      "Pertanyaan pertama hampir setiap klien kami sama: berapa biaya pembuatan website di Jogja? Jawaban jujurnya: tergantung tiga hal — jumlah halaman, kebutuhan desain, dan fitur khusus. Landing page satu halaman tentu jauh lebih hemat daripada website company profile 12 halaman plus blog.",
      "Sebagai patokan kasar pasar 2026: landing page profesional biasanya di kisaran beberapa juta rupiah, website company profile UMKM di kisaran belasan juta, sedangkan aplikasi web custom dengan dashboard mulai puluhan juta. Angka pastinya selalu keluar setelah brief — waspadai vendor yang memberi harga tanpa bertanya apa-apa.",
      "Pisahkan juga biaya sekali bayar dan biaya tahunan. Domain (.com/.id) dan hosting/VPS adalah biaya tahunan yang kecil tapi wajib. Desain dan pembangunan adalah biaya sekali bayar. Perawatan bulanan sifatnya opsional — ambil bila Anda tidak mau mengurus update dan backup sendiri.",
      "Biaya siluman paling sering muncul dari revisi tak terbatas dan 'fitur kecil' yang ternyata besar. Minta semuanya tertulis: jumlah halaman, jumlah putaran revisi, dan apa yang termasuk garansi. Di [layanan website kami](/jasa-pembuatan-website-jogja/) setiap proyek memakai estimasi harga tetap yang disepakati sebelum mulai.",
      "Terakhir, ukur harga terhadap hasilnya. Website Rp15 juta yang mendatangkan 5 pelanggan baru per bulan jauh lebih murah daripada website Rp5 juta yang tidak pernah menghasilkan apa-apa. Tanyakan pada diri sendiri: berapa nilai satu pelanggan bagi bisnis Anda?",
    ],
  },
  {
    slug: "berapa-biaya-buat-toko-online-shopify",
    title: "Berapa Biaya Buat Toko Online Shopify? Rinciannya",
    tag: "Biaya",
    date: "10 Okt 2026",
    readTime: "5 mnt baca",
    excerpt: "Biaya buat toko online Shopify terdiri dari langganan Shopify, jasa setup, dan opsional aplikasi. Ini rinciannya agar budget Anda pas.",
    cover: "/images/journal/EVzzVsdGSAc3N0sCk1OxGlBp7U.6ad5e702.jpg",
    coverAlt: "Rincian biaya membuat toko online Shopify",
    body: [
      "Biaya membuat toko online Shopify punya tiga komponen. Pertama, langganan Shopify sendiri — paket Basic cukup untuk sebagian besar UMKM, dibayar bulanan atau tahunan langsung ke Shopify. Kedua, jasa setup dan desain: dari pengaturan payment gateway dan ongkir sampai custom theme. Ketiga, biaya opsional aplikasi tambahan bila butuh fitur khusus.",
      "Untuk toko standar dengan theme yang disesuaikan brand, total investasi awal biasanya masih di kisaran belasan juta rupiah di luar langganan. Yang mengerek biaya adalah kebutuhan custom: aturan grosir, sistem langganan, atau integrasi gudang — di sinilah aplikasi khusus dibangun.",
      "Jangan lupakan biaya berjalan: langganan Shopify, payment gateway (potongan per transaksi), dan domain tahunan. Hitung semuanya sebagai persentase omzet target — kalau totalnya di bawah 5–10% omzet, tokonya sehat secara finansial.",
      "Tips hemat: mulai dari kebutuhan inti dulu. Katalog rapi, pembayaran lengkap, dan ongkir otomatis sudah cukup untuk jualan. Fitur canggih bisa menyusul setelah ada pemasukan. Butuh gambaran untuk kasus Anda? Lihat [jasa Shopify kami](/jasa-shopify/) dan minta estimasi gratis.",
    ],
  },
  {
    slug: "shopify-vs-woocommerce-untuk-umkm",
    title: "Shopify vs WooCommerce untuk UMKM: Mana yang Cocok?",
    tag: "Panduan",
    date: "6 Okt 2026",
    readTime: "5 mnt baca",
    excerpt: "Shopify vs WooCommerce untuk UMKM: perbandingan jujur soal biaya, kemudahan, dan kontrol — plus rekomendasi untuk tiap kondisi.",
    cover: "/images/journal/Sxgu1H6NXNCjj1tqm1LJuFogU.bc2f0f64.jpg",
    coverAlt: "Perbandingan Shopify vs WooCommerce untuk UMKM",
    body: [
      "Shopify dan WooCommerce menyelesaikan masalah yang sama — jualan online — dengan filosofi berlawanan. Shopify adalah apartemen service: semua diurus (server, keamanan, update), Anda tinggal masuk dan jualan. WooCommerce adalah tanah milik sendiri: bebas bangun apa saja, tapi Anda yang mengurus IMB-nya.",
      "Pilih Shopify bila Anda ingin fokus jualan: mulai dalam hitungan minggu, dashboard sederhana untuk tim, dan checkout yang teruji. Langganan bulanannya adalah harga kemudahan itu. Cocok untuk brand baru sampai menengah yang tidak punya tim teknis.",
      "Pilih WooCommerce bila Anda butuh kontrol penuh atau menekan biaya langganan jangka panjang: tidak ada komisi platform, plugin nyaris tak terbatas. Syaratnya — Anda (atau vendor Anda) siap mengurus hosting, keamanan, dan update. Tanpa itu, toko WordPress yang tidak dirawat justru jadi liability.",
      "Aturan praktis kami: kalau pertanyaan Anda 'kapan bisa jualan?', jawabannya Shopify. Kalau pertanyaannya 'bisakah dibuat seperti ini?', jawabannya perlu didiskusikan — dan sering berujung custom di salah satu platform. Konsultasikan gratis, kami rekomendasikan yang paling hemat untuk kasus Anda.",
    ],
  },
  {
    slug: "landing-page-vs-website-company-profile",
    title: "Landing Page vs Website Company Profile: Pilih yang Mana?",
    tag: "Panduan",
    date: "2 Okt 2026",
    readTime: "4 mnt baca",
    excerpt: "Landing page vs website company profile: beda tujuan, beda struktur. Panduan memilih agar budget promosi tidak terbuang.",
    cover: "/images/journal/bstKOBl540dvdv6ooe65n1qE.6ad5e702.jpg",
    coverAlt: "Perbedaan landing page dan website company profile",
    body: [
      "Landing page dan website company profile sering dianggap sama karena sama-sama 'website'. Padahal beda tujuan: landing page punya satu tugas untuk satu audiens — misalnya mengubah klik iklan menjadi chat WhatsApp. Company profile melayani banyak kebutuhan: profil, layanan, portofolio, blog, dan kontak.",
      "Untuk campaign iklan, landing page hampir selalu menang. Pengunjung dari iklan punya perhatian 3 detik; halaman yang langsung nyambung dengan janji iklan mengubah jauh lebih baik daripada beranda ramai berisi 7 menu. Skor kualitas iklan pun ikut naik sehingga biaya per klik turun.",
      "Untuk kredibilitas jangka panjang, company profile tidak tergantikan. Calon pelanggan besar, partner, dan pelamar kerja akan mengetik nama brand Anda di Google — yang harus muncul adalah website resmi yang meyakinkan, bukan cuma akun media sosial.",
      "Jawaban paling umum untuk UMKM: butuh keduanya, dimulai dari yang menghasilkan dulu. Jalankan iklan ke landing page untuk pemasukan cepat, lalu bangun company profile sebagai rumah permanen. Kami mengerjakan keduanya — mulai dari [jasa landing page](/jasa-landing-page/) bila targetnya jualan bulan ini.",
    ],
  },
  {
    slug: "cara-memilih-software-house-di-yogyakarta",
    title: "Cara Memilih Software House di Yogyakarta (Tanpa Menyesal)",
    tag: "Panduan",
    date: "28 Sep 2026",
    readTime: "5 mnt baca",
    excerpt: "Cara memilih software house di Yogyakarta: 5 cek praktis — portofolio, kontrak harga tetap, proses, garansi, dan komunikasi.",
    cover: "/images/journal/kcShJz4dYJymSiptkbzpYB1JF4.11e1d4e3.jpg",
    coverAlt: "Tips memilih software house di Yogyakarta",
    body: [
      "Yogyakarta penuh talenta digital — justru itu masalahnya: memilih software house di Yogyakarta yang tepat butuh saringan. Berikut lima cek praktis yang kami sarankan, bahkan bila Anda akhirnya tidak memakai jasa kami.",
      "Pertama, lihat portofolio yang bisa diklik, bukan sekadar screenshot. Buka websitenya di HP Anda: cepat atau lemot? Kedua, minta estimasi harga tetap tertulis — lingkup, revisi, dan timeline. Vendor yang hanya memberi harga lisan adalah bendera merah.",
      "Ketiga, tanyakan prosesnya: kapan Anda melihat demo? Bagaimana revisi ditangani? Keempat, garansi: apa yang terjadi bila ada bug sebulan setelah serah terima? Kelima, uji komunikasinya sejak chat pertama — vendor yang lambat saat pendekatan jarang membaik setelah DP dibayar.",
      "Satu lagi yang sering dilupakan: kepemilikan. Pastikan domain, hosting, dan kode sumber atas nama Anda, plus Anda bisa mengedit konten sendiri. Itu standar kami di setiap proyek [pembuatan website](/jasa-pembuatan-website-jogja/) — dan seharusnya standar semua vendor.",
    ],
  },
];

export const AUTHOR = {
  initials: "IL",
  name: "Ilmantara",
  bioId:
    "Software house di Yogyakarta. Setiap email tentang tulisan ini dibalas.",
  email: "hello@ilmantara.com",
};
