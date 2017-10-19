<template>
  <div class="header">
      <input type="text" placeholder="电影">
  </div>
</template>

<script>
  export default {
    name: 'header',
    props: ['title'],
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
.header {
  position: relative;
  background: #12CC11;
  width: 100%;
  height: 1.2rem;
}
input {
  width: 80%;
  height: .8rem;
  line-height: 1rem;
  border-radius: .1rem;
  position: absolute;
  left: .4rem;
  top: 50%;
  margin-top: -.4rem;
  z-index: 10;
  background: #fff;
  font-size: .3rem;
  text-indent: .1rem;
}
</style>
