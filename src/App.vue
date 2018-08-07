<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>HTTP</h1>
        <div class="form-group">
          <label>Kode Barang</label>
          <input type="text" class="form-control" v-model="barang.kodeBarang">
        </div>
        <div class="form-group">
          <label>Nama Barang</label>
          <input type="text" class="form-control" v-model="barang.namaBarang">
        </div>
        <button class="btn btn-primary"  @click="submit">Submit</button>
      </div>
    </div>
    <br><br>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <ul class="list-group text-center">
          <li class="list-group-item" v-for="good in goods">{{ good.namaBarang}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      barang: {
        kodeBarang: 0,
        namaBarang: ''
      },
      goods: []
    }
  },
  methods: {
    submit() {
      this.$http.post('http://localhost:3000/barang/', this.barang)
      .then(response => {
        console.log('Data Masukkkkkkkkkkkk', response);
        location.reload();
      })
      .catch(err => {
        res.send(err)
      })
    }
  },
  created() {
    this.$http.get('http://localhost:3000/barang/').
    then(response => {
      // console.log(response.body);
      let data = response.body
      data.forEach(element => {
        // console.log('INI ELEMENTTTTTTT' + JSON.stringify(element));
        this.goods.push(element)
      })
      // console.log('ini goods + ' + JSON.stringify(this.goods));
    })
    .catch(err => {
      res.send(err)
    })
  }
}

</script>

<style >

</style>
