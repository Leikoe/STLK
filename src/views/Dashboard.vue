<template>
  <div>
    <div class="w-1/2 sm:w-1/2 m-5">
      <div class="flex flex-col justify-center items-center w-screen">
        <p class="text-gray-100 md:text-5xl text-2xl font-bold text-left mb-10">
          DASHBOARD
        </p>
        <Stalk
          v-for="(stalk, index) in tabStalks"
          :key="index"
          :name="stalk.name"
          :status="stalk.status"
          :untilNextScan="stalk.untilNextScan"
          :img="stalk.img"
        ></Stalk>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Stalk from "@/components/Stalk.vue";

export default {
  name: "Dashboard",
  data() {
    return {
      tabStalks: [],
    };
  },
  components: {
    Stalk,
  },
  mounted() {
    this.fetchStalks();
  },
  methods: {
    fetchStalks() {
      // fetch("/api/search?query=" + this.$route.query.search).then(
      //   (response) => {
      //     response.json().then((json) => {
      //       this.tabResults = json.data;
      //     });
      //   }
      // );
      this.tabStalks = [
        {
          name: "LeikOwO",
          status: "Offline",
          untilNextScan: 1,
          img: "https://mc-heads.net/avatar/LeikOwO/100",
        },
      ];
    },
  },
};
</script>

<style></style>
