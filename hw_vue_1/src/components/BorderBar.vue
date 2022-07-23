<template>
  <form class="border-bar">
    <label for="input-border" class="border-bar__text">Border:</label>
    <v-slider
      max="50"
      min="-50"
      class="border-bar__border"
      id="input-border"
      v-model="valueBorder"
      color="v-bind(valueColor)"
      track-color="#434751"
      track-fill-color="#434751"
    ></v-slider>
    <label for="input-color" class="border-bar__text">Base Color:</label>
    <b-form-input
      type="color"
      class="border-bar__color"
      id="input-color"
      v-model="valueColor"
    />
  </form>
</template>

<script>
export default {
  name: "BorderBar",
  data() {
    return {
      valueColor: "#ffc600",
    };
  },
  watch: {
    valueColor(newValue) {
      this.$emit("changeColor", newValue);
    },
  },
  methods: {
    onChangeColor(valueColor) {
      this.valueColor = valueColor;
    },
  },
};
</script>

<style lang="scss" scoped>
.border-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  &__text {
    font-size: 30px;
    margin-right: 10px;
    color: v-bind(valueColor);
  }

  &__border {
    max-width: 150px;
    margin-right: 10px;
    margin-top: 20px;
  }

  &__color {
    max-width: 70px;
    padding: 7px !important;
    background-color: white;
    border-radius: 3px;
  }
}
</style>
