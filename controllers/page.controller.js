// Data simulasi (pengganti Model/database)
const daftarBuku = [
    { id: 1, judul: 'Laskar Pelangi', penulis: 'Andrea Hirata', tahun: 2005, kategori: 'Fiksi' },
    { id: 2, judul: 'Bumi Manusia', penulis: 'Pramoedya Ananta Toer', tahun: 1980, kategori: 'Sejarah' },
    { id: 3, judul: 'Algoritma dan Pemrograman', penulis: 'Rinaldi Munir', tahun: 2016, kategori: 'Teknologi' },
    { id: 4, judul: 'Filosofi Teras', penulis: 'Henry Manampiring', tahun: 2018, kategori: 'Non-Fiksi' }
];

const daftarKategori = ['Fiksi', 'Non-Fiksi', 'Teknologi', 'Sejarah', 'Sains'];

exports.getBeranda = (req, res) => {
    res.render('pages/home', {
        pageTitle: 'Beranda',
        userName: 'Pengunjung Perpustakaan',
        totalBuku: daftarBuku.length,
        bukuTerbaru: daftarBuku[daftarBuku.length - 1]
    });
};

exports.getTentang = (req, res) => {
    res.render('pages/tentang', { pageTitle: 'Tentang Kami' });
};

exports.getKatalog = (req, res) => {
    res.render('pages/katalog', { pageTitle: 'Katalog Buku', daftarBuku });
};

exports.getFormTambah = (req, res) => {
    res.render('pages/tambah', { pageTitle: 'Tambah Buku', daftarKategori });
};

exports.postTambahBuku = (req, res) => {
    // req.body berisi pasangan key-value dari atribut 'name' di form
    console.log('\n[BACK-END] Menerima Payload POST:');
    console.log(req.body);

    // Simpan ke array supaya langsung tampil di katalog
    daftarBuku.push({
        id: daftarBuku.length + 1,
        judul: req.body.judul,
        penulis: req.body.penulis,
        tahun: Number(req.body.tahun),
        kategori: req.body.kategori
    });

    // Post-Redirect-Get (PRG): cegah resubmit saat refresh
    res.redirect('/katalog');
};
