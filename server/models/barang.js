console.log('Models Barang\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let barangSchema = new Schema({
  kodeBarang : { type: Number },
  namaBarang : { type: String }
}, { timestamps : true })

let barang = mongoose.model('barang', barangSchema)

module.exports = barang;
