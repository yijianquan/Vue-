<template>
  <div id="app">
    <navigation></navigation>
    <index></index>
    <foot></foot>
  </div>
</template>

<script>
  import navigation from './navigation'
  import index from './index'
  import foot from './foot'

  // import navigation from './components/navigation'
  // import index from './components/index/index'
  // import foot from './components/foot'

  export default {
    name: 'App',
    components: {
      navigation,
      index,
      foot
    }
  }
</script>

<style>
a{
  text-decoration:none
}
body{
  margin:0px;
}
</style>
