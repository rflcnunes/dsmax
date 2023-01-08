import { actions } from "@storybook/addon-actions";
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
      <TheButton :label="label">Test</TheButton>
    `,
};

export const WithAction = {
  components: { TheButton },
  methods: actions("click"),
  template: `
        <TheButton @click="action">Test</TheButton>
    `,
};
