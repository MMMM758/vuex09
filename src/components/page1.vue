<template>
  <div>
    <h2>Page 1</h2>
    <input type="text" @input="changePage1" />
    <button @click="add">+</button>
  </div>
</template>



<script>
export default {
  methods: {
    changePage1(e) {
      //console.log(e.target.value)
      this.$store.commit("setPage1", e.target.value);
    },
    add() {
      this.$store.commit("increment");
    },
  },
};
</script>


<style>
</style>