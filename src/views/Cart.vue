<template>
  

<h1>This is our cart</h1>



</template>

<script>
export default {
name: "App",
  data() {
    return {
      getResult: null,
    }
  },
  methods: {
    fortmatResponse(res) {
      return JSON.stringify(res, null, 2);
    },

  }


}

</script>



<style>

</style>