console.log('Routes Barang\n');

const express = require('express');
const router = express.Router();
const BarangController = require('../controllers/barang');

router.get('/', BarangController.findAllBarang)

router.post('/', BarangController.createBarang)

router.delete('/:id', BarangController.deleteBarang)

module.exports = router;
