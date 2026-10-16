const express = require('express');
const router = express.Router();
const pageController = require('../controllers/page.controller');

router.get('/', pageController.getBeranda);
router.get('/tentang', pageController.getTentang);
router.get('/katalog', pageController.getKatalog);
router.get('/katalog/tambah', pageController.getFormTambah);
router.post('/katalog/tambah', pageController.postTambahBuku);

module.exports = router;