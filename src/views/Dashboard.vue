<template>
  <div class="flex justify-center">
    <div class="w-2/3 md:w-4/5 m-5 flex flex-col justify-center items-center">
      <p class="text-gray-100 md:text-5xl text-2xl font-bold text-left mb-10">
        DASHBOARD
      </p>
      <Stalk
        class="m-5"
        v-for="(stalk, index) in tabStalks"
        :key="index"
        :name="stalk.name"
        :online="stalk.online"
        :untilNextScan="stalk.untilNextScan"
        :img="stalk.img"
      ></Stalk>
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
          online: false,
          untilNextScan: 1,
          img: "https://mc-heads.net/avatar/LeikOwO/100",
        },
        {
          name: "Refactor",
          online: true,
          untilNextScan: 2,
          img: "https://mc-heads.net/avatar/Refactor/100",
        },
      ];
    },
  },
};
</script>

<style></style>
