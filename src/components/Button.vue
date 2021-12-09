<template>
  <input type="button" class="submit-button" :value="text" @click="onclick" />
</template>

<script>
export default {
  name: "Button",
  data() {
    return {};
  },
  props: {
    onclick: {
      type: Function,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  methods: {},
};
</script>

<style scoped>
.submit-button {
  @apply bg-gray-100 hover:bg-gray-800 hover:text-gray-100 text-gray-800 font-bold py-2 px-4 rounded-full h-auto w-auto text-center;
}
</style>
