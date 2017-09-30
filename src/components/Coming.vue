<template>
  <div class="coming">
    <h1>{{ msg }}</h1>
    <div class="content">
      <ul>
        <Item></Item>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'coming',
  data () {
    return {
      msg: 'coming'
    }
  }
}

Vue.component('Item', {
  template: '<span>{{ message }}</span>',
  data: {
    message: 'hello'
  }
})

</script>

<style scoped>

</style>