<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <page1 />
    <page2 />
    <display />
    <counter />
  </div>
</template>



<script>
import page1 from "@/components/page1";
import page2 from "@/components/page2";
import display from "@/components/display";
import counter from "@/components/counter";

export default {
  name: "App",
  components: {
    page1,
    page2,
    display,
    counter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: blueviolet;
  margin-top: 60px;
}
</style>
