const express = require('express');
const app = express();
const PORT = 3000;
const pageRoutes = require('./routes/page.routes');

// View engine & file statis
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Parser form (application/x-www-form-urlencoded) - harus di atas router
app.use(express.urlencoded({ extended: true }));

// Router
app.use('/', pageRoutes);

// Fallback 404
app.use((req, res) => {
    res.status(404).render('pages/404', { pageTitle: 'Halaman Tidak Ditemukan' });
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`[SERVER] Perpustakaan aktif di http://localhost:${PORT}`);
});
