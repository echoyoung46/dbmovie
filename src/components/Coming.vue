<template>
  <div class="coming">
    <my-header title="thisisheader"></my-header>
    <div class="menu">
      <ul>
       <li class="menu-item">正在热映</li>
       <li class="menu-item">即将上映</li>
      </ul>
    </div>
    <div class="content">
      <ul>
        <my-component></my-component>
      </ul>
    </div>
  </div>
</template>

<script>
var Child = {
  template: '<li>A custom component!</li>'
}

export default {
  name: 'coming',
  data () {
    return {
      msg: 'coming',
      hotUrl: 'https://api.douban.com//v2/movie/in_theaters'
    }
  },
  created () {
    this.getHotMovies()
  },
  methods: {
    getHotMovies () {
      this.axios.get(this.hotUrl)
      .then(function (res) {
        console.log(res)
        if (res.status === 200) {
          this.hotList = res.data.subjects
          console.log(this.hotList)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  },
  components: {
    'my-component': Child
  }
}

</script>

<style scoped>
.menu ul {
  display: flex;
}
.menu-item {
  flex: 1;
  list-style: none;
  text-align: center;
  font-size: .4rem;
  line-height: .8rem;
  background: #666;
  color: #fff;
  border-left: 1px solid #fff;
}
.menu-item:first-child {
  border-left: none;
}
</style>
