<template>
  <div class="home">
    <div class="background md:h-1/2 h-2/3">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="shape-fill"
        ></path>
      </svg>

      <div class="h-full bg-gray-800">
        <router-link to="/dashboard"
          ><Button class="bouton text-2xl" text="Discord Login"> </Button
        ></router-link>
      </div>
    </div>

    <div class="w-1/2 sm:w-1/2 m-5">
      <p class="text-gray-100 md:text-5xl text-2xl font-bold text-left">
        Stalk poor nons with exotic armors and shark them now !
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/Button.vue";

export default {
  name: "Home",
  components: {
    Button,
  },
};
</script>

<style scoped>
.home {
  @apply h-auto;
}
.background {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 0;
}

.background svg {
  position: relative;
  display: block;
  width: calc(182% + 1.3px);
  height: 258px;
}

.background .shape-fill {
  fill: #262626;
}
</style>
