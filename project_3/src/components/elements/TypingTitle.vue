<template>
  <vue-typed-js
    :strings="[
      'Find your film!..',
      'Read about it...',
      'Start watching!..',
      'Enjoy the film...',
    ]"
    :typeSpeed="150"
    :showCursor="false"
    :backSpeed="30"
    :loop="true"
    :startDelay="1000"
  >
    <h1 class="typing"></h1>
  </vue-typed-js>
</template>

<script>
export default {
  name: "TypingTitle",
};
</script>

<style lang="scss" scoped>
.typing {
  position: absolute;
  left: 50%;
  bottom: 40%;
  transform: translate(-50%, 0%);
  z-index: 1;
  font-family: "Londrina Solid", cursive;
  font-size: 90px;
  margin-bottom: 60px;
}
</style>
