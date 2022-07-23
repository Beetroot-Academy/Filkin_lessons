<template>
  <form class="toolbar">
    <label for="input-blur" class="toolbar__text">Blur: </label>
    <v-slider
      :min="0"
      :max="20"
      class="toolbar__range"
      id="input-blur"
      v-model="valueBlur"
    ></v-slider>

    <label for="input-contrast" class="toolbar__text">Contrast: </label>
    <v-slider
      :max="200"
      :min="0"
      class="toolbar__range"
      id="input-contrast"
      v-model="valueContrast"
      track-color="#434751"
      track-fill-color="#434751"
    ></v-slider>

    <label for="input-rotate" class="toolbar__text">Hue Rotate: </label>
    <v-slider
      :max="360"
      :min="0"
      class="toolbar__range"
      id="input-hue-rotate"
      v-model="valueHueRotate"
      track-color="#434751"
      track-fill-color="#434751"
    ></v-slider>

    <label for="input-sepia" class="toolbar__text">Sepia: </label
    ><v-slider
      :max="100"
      :min="0"
      class="toolbar__range"
      id="input-sepia"
      v-model="valueSepia"
      track-color="#434751"
      track-fill-color="#434751"
    ></v-slider>

    <label for="input-saturate" class="toolbar__text">Saturate: </label
    ><v-slider
      :max="200"
      :min="0"
      class="toolbar__range"
      id="input-saturate"
      v-model="valueSaturate"
      track-color="#434751"
      track-fill-color="#434751"
    ></v-slider>

    <input
      type="reset"
      value="Clear all"
      class="toolbar__reset"
      id="input-reset"
    />
  </form>
</template>

<script>
export default {
  name: "ToolBar",
  data() {
    return {
      valueColor: "#ffc600",
    };
  },
  watch: {
    onChangeColor(valueColor) {
      this.valueColor = valueColor;
    },
  },
};
</script>

<style lang="scss" scoped>
.toolbar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__text {
    font-size: 20px;
    text-align: start;
  }

  &__reset {
    border: 1px solid v-bind(valueColor);
    background-color: transparent;
    max-width: fit-content;
    padding: 7px;
    color: v-bind(valueColor);
    font-size: 22px;
    &:hover {
      background-color: v-bind(valueColor);
      color: #191d23;
    }
  }
}
</style>
