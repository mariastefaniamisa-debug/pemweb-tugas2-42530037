# Perpustakaan Kampus

Aplikasi web multi-halaman bertema katalog perpustakaan, dibangun dengan Node.js, Express, dan EJS menggunakan pola MVC.

**Nama:** Maria Stefania Misa
**NIM:** 42530037
**Mata Kuliah:** Pemrograman Web (MK11), Tugas 2 Terstruktur

## Fitur
- Beranda dinamis, halaman Tentang Kami, dan Katalog Buku
- Form Tambah Buku (teks, angka, dropdown) dengan pola Post-Redirect-Get

## Cara Menjalankan
1. `npm install`
2. `npm run dev`
3. Buka http://localhost:3000

## Struktur Proyek
- `app.js`: inisialisasi aplikasi dan middleware
- `routes/`: definisi endpoint
- `controllers/`: logika aplikasi
- `views/`: halaman EJS dan partials
- `public/`: berkas statis (CSS)