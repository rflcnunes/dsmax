import TheButton from "./TheButton.vue";

export default {
  title: "Atoms/TheButton",
  component: TheButton,
};
export const Default = {
  components: { TheButton },
  props: {
    label: {
      default: "Button",
    },
  },
  template: `
      <TheButton />
    `,
};
