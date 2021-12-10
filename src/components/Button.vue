<template>
  <input
    type="button"
    v-bind:class="
      !inverted
        ? border
          ? 'submit-button border'
          : 'submit-button'
        : border
        ? 'submit-button-inverted border-inverted'
        : 'submit-button-inverted'
    "
    :value="text"
    @click="onclick"
  />
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
    inverted: {
      type: Boolean,
      required: false,
    },
    border: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {},
};
</script>

<style scoped>
.submit-button {
  @apply bg-gray-100 hover:bg-gray-800 hover:text-gray-100 text-gray-800 font-bold py-2 px-4 rounded-full h-auto w-auto text-center;
}

.submit-button-inverted {
  @apply bg-gray-800 hover:bg-gray-100 hover:text-gray-800 text-gray-100 font-bold py-2 px-4 rounded-full h-auto w-auto text-center;
}

.border {
  @apply border-4 border-gray-800 border-solid;
}

.border-inverted {
  @apply border-4 border-gray-100 border-solid;
}
</style>
