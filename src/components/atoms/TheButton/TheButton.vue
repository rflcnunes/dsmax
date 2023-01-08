<template>
  <button class="btn" @click="$emit('input', $event)" type="submit">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "TheButton",
  data() {
    return {
      value: "",
    };
  },
  props: {
    label: {
      type: String,
      required: true,
      default: "Submit",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 30%;
  height: 30px;
  border-radius: 0.5rem;
  background: #2d3748;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:first-child {
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
  }

  &:hover {
    background: #4a5568;
  }

  &:active {
    background: #cbd5e0;
    color: #1a202c;
  }
}
</style>
