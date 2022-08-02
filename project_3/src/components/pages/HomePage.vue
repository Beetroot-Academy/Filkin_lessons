<template>
  <section class="hero">
    <div class="hero__content container">
      <TypingTitle />
      <router-link to="/search/">
        <MyButton />
      </router-link>
    </div>
  </section>
</template>

<script>
import MyButton from "@/components/elements/Button";
import TypingTitle from "@/components/elements/TypingTitle";

export default {
  name: "HeroSection",

  components: {
    MyButton,
    TypingTitle,
  },
};
</script>

<style lang="scss">
.hero {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: flex-end;
  background-image: url(@/assets/hero.gif);
  background-size: cover;
  background-repeat: no-repeat;
  &__content {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 1007px) {
  .hero {
    height: 93vh;
  }
}
</style>
