<template>
  <div>
    <h2>Page 2</h2>
    <input type="text" @input="changePage2" />
    <button @click="reduce">-</button>
  </div>
</template>



<script>
export default {
  methods: {
    changePage2(e) {
      console.log(e.target.value);
      this.$store.commit("setPage2", e.target.value);
    },
    reduce() {
      this.$store.dispatch("reduceAction");
    },
  },
};
</script>


<style>
</style>