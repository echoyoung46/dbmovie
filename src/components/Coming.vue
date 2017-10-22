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
      <div class="movie-list">
        <a v-for="item in hotList" href="">
          <div class="music-cover">
            <img :src="item.images.large" alt="" class="movie-cover">
          </div>
          <div class="music-info">
            <p>{{ item.title }}</p>
          </div>
        </a>
      </div>
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
      hotUrl: 'http://api.douban.com//v2/movie/in_theaters',
      hotList: []
    }
  },
  created () {
    this.getHotMovies()
  },
  methods: {
    getHotMovies () {
      this.axios.get(this.hotUrl)
      .then((res) => {
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
.movie-list {
  flex-flow: row wrap;
  display: flex;
}
.movie-list a {
  width: 33.3333333%;
  font-size: .3rem;
  text-align: center;
}
.music-rate-start-full {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==");
}
.music-rate-start-gray {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=");
}
</style>
