<template>
  <div class="coming">
    <my-header title="thisisheader"></my-header>
    <div class="menu">
      <ul>
       <li class="menu-item"><a href="">正在热映</a></li>
       <li class="menu-item"><a href="">即将上映</a></li>
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
      msg: 'coming'
    }
  },
  components: {
    'my-component': Child
  }
}

</script>

<style scoped>
.menu-item {
  flex: 1;
}
</style>