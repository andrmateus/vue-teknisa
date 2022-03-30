<template>
    <div class="main">
        <h1>This page is a test</h1>
        <p>Test of vuejs</p>

        <p>This part was writed with script: {{ message }}</p>
        
    </div>
</template>

<script>
export default {
  name: "FirstTest",
  data(){
    return {
      message: "Here is Scripted"
    }
  }
}
</script>

<style scoped>

</style>