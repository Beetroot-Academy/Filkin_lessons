<template>
  <div id="app">
    <div class="container">
      <h1 class="title">
        <MainLogo />
        CSSgram
      </h1>
      <v-card elevation="5"></v-card>      <h2 class="subtitle">
        Update CSS variebles with <span class="subtitle--color">JS</span>
      </h2>
      <BorderBar @changeColor="onChangeColor" />
      <div class="content">
        <div class="content__img">
          <img src="./assets/img.jpg" alt="Image" @changeBlur="onChangeBlur" />
        </div>
        <div class="content__toolbar">
          <ToolBar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BorderBar from "./components/BorderBar";
import ToolBar from "./components/ToolBar";
import MainLogo from "./components/MainLogo";

export default {
  name: "App",
  components: {
    BorderBar,
    ToolBar,
    MainLogo,
  },
  data() {
    return {
      valueColor: "#ffc600",
      valueBlur: 0,
      valueContrast: 100,
      valueHueRotate: 0,
      valueSepia: 0,
      valueSaturate: 100,
      blur: `0px`,
      contrast: `100%`,
      hueRotate: `0deg`,
      sepia: `0%`,
      saturate: `100%`,
    };
  },
  methods: {
    onChangeColor(valueColor) {
      this.valueColor = valueColor;
    },
    onChangeBlur(valueBlur) {
      this.valueBlur = valueBlur;
    },
    onChangeContast(valueContrast) {
      this.valueContrast = valueContrast;
    },
    onChangeHueRotate(valueHueRotate) {
      this.valueHueRotate = valueHueRotate;
    },
    onChangeSepia(valueSepia) {
      this.valueSepia = valueSepia;
    },
    onChangeSaturate(valueSaturate) {
      this.valueSaturate = valueSaturate;
    },
  },
};
</script>

<style lang="scss">
@import url("./assets/reset.css");

body {
  background-color: #191d23 !important;
  font-family: sans-serif !important;
  color: white !important;
}

img {
  border: v-bind(border) solid v-bind(valueColor);
  max-width: 100%;
}

.container {
  max-width: 1220px;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: v-bind(valueColor);
  &__logo {
    margin-right: 10px;
    padding-top: 5px;
    width: 40px;
    fill: v-bind(valueColor);
  }
}

.subtitle {
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 30px;
  &--color {
    color: v-bind(valueColor);
  }
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
  &__img {
    width: 70%;
  }
  &__img > img {
    filter: blur(v-bind(blur)) contrast(v-bind(contrast))
      hue-rotate(v-bind(hueRotate)) sepia(v-bind(sepia));
  }

  &__toolbar {
    width: 30%;
  }
}
</style>
