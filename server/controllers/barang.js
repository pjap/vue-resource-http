console.log('Controllers Barang\n');

const BarangModel = require('../models/barang')

class Barang {
  constructor() {

  }

  static findAllBarang(req, res) {
    BarangModel.find({})
    .then(dataBarang => {
      res.send(dataBarang)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createBarang(req, res) {
    BarangModel.create({
      kodeBarang: req.body.kodeBarang,
      namaBarang: req.body.namaBarang
    })
    .then(dataBarang => {
      res.send({
        Message: 'Data Anda Berhasil Di Simpan',
        Data: dataBarang
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteBarang(req, res) {
    BarangModel.findOneAndRemove({ _id : req.params.id })
    .then(dataBarang => {
      res.send({
        Message : 'Barang Berhasil Di Hapus',
        Data : dataBarang
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

}


module.exports = Barang;
