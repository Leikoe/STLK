<template>
  <div id="app">
    <div id="nav" class="flex justify-between items-center">
      <div>
        <router-link
          class="flex justify-start items-center text-6xl font-normal"
          to="/"
          ><img alt="Stlk logo" class="mr-5" src="./assets/logo.png" />
          <p class="mb-3 invisible md:visible">stlk.moe</p>
        </router-link>
      </div>
      <router-link to="/about"
        ><Button class="bouton" key="0" text="Login"> </Button
      ></router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  @apply font-sans;
  @apply bg-gradient-to-t from-gray-200 via-gray-400 to-gray-600 h-screen;
  z-index: -2;
}

#nav {
  padding: 30px;
  height: 12.5vh;
}

#nav a {
  @apply text-gray-100;
}
</style>
