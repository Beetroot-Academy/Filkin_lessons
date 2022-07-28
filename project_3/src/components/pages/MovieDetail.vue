<template>
  <section class="movie-details container">
    <img
      :src="movie.poster_path"
      :alt="movie.title"
      class="movie-details__img"
    />
    <h2 class="movie-details__title">{{ movie.title }}</h2>
    <span class="movie-details__date">{{
      movie.release_date | TransformDate
    }}</span>
    <p class="movie__overview">{{ movie.overview }}</p>
  </section>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
// import env from "@/env.js";

export default {
  name: "MovieDetail",

  setup() {
    const movie = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      fetch
    });

    return {
      movie,
    };
  },
};
</script>

<style lang="scss">
.movie-details {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 90vh;
  background-color: #000;
}

.movie-details__title {
  font-family: "Londrina Outline", cursive;
  font-size: 60px;
  margin: 50px 0;
}
</style>
