<script>
  export default{
    data(){
      return{
        test: 'Hello!',
      }
    }
  }
</script>

<template>
  <h1>
    {{ test }}
  </h1>
</template>

<style lang="scss">
  h1{
    color: white;
  }
</style>