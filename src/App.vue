<template>
  <div id="app">
    <Header />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
body {
  overflow-x: hidden;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  margin: 0;
}
a {
  text-decoration: none !important;
}
ul {
  list-style: none;
}
p {
  margin: 0 !important;
  color: #2c3e50a1;
  font-weight: 600;
  font-size: 16px;
}
#nav {
  padding: 30px;
}

.grays{
  color: #2c3e509f;
}
.greens {
  color: #329487f8;
}
</style>
