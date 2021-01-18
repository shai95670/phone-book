<template>
  <div id="app">
    <PhoneBookNav></PhoneBookNav>
    <phone-book-table></phone-book-table>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import PhoneBookNav from "./components/NavBar.vue";
import PhoneBookTable from "./components/PhoneBookTable.vue";

export default {
  name: "App",
  components: {
    PhoneBookNav,
    PhoneBookTable,
    PhoneBookTable,
  },
  created() {
  },
};
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
