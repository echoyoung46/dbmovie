<template>
  <div class="coming">
    <my-header title="thisisheader"></my-header>
    <h1>{{msg}}</h1>
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
      msg: 'coming'
    }
  },
  components: {
    'my-component': Child
  }
}

</script>

<style scoped>

</style>