<template>
  <div id="input-component">
    <label id="label">{{ label }}</label>
    <input id="input" :type="type" :placeholder="placeholder" v-model="value"/>
  </div>
</template>

<script>
const _inputTypes = ["text", "email"];
export default {
  name: "TheInput",
  data() {
    return {
      value: "",
    };
  },
  props: {
    label: {
      type: String,
      required: false,
      default: "Label",
    },
    placeholder: {
      type: String,
      required: false,
      default: "Placeholder",
    },
    type: {
      type: String,
      required: false,
      default: "text",
      validator(value) {
        return _inputTypes.includes(value);
      },
    },
  },
  watch: {
    value() {
      this.$emit("input", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
#input-component {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  max-width: 30%;

  #label {
    width: 100%;
    margin-bottom: 0.5rem;
    font-family: 'Roboto', sans-serif;
  }

  #input {
    border: 1.5px solid #1a202c;
    border-radius: 10px;
    background: white;
    padding: 0.5rem;
  }

  #input:hover {
    border: 1.5px solid #9B6AFA;
  }

  #input:focus {
    border: 1.5px solid #0478F4;
  }
}
</style>
