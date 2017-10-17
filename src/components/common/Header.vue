<template>
  <div class="header">
      <input type="text" placeholer="电影">
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
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -.4rem;
  margin-left: -45%;
  width: 90%;
  margin: 0 auto;
  height: .8rem;
  line-height: 1rem;
  border-radius: .1rem;
}
</style>