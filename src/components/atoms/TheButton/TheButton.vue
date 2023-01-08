<template>
  <button @click="handleClick">
    {{ label }}
    <slot />
  </button>
</template>

<script>
export default {
  name: "TheButton",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
button {
  width: 200px;
  height: 50px;
  background-color: #2c3e50;
  color: aliceblue;
}
</style>
