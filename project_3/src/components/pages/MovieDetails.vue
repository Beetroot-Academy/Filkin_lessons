<template>
  <section class="movie-details container">
    <h2 class="movie-details__title">{{ movie.title }}</h2>
    <h1>FILYAFILKIN</h1>
    <div class="movie-details__img">
      <img
        :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
        lazy-src="https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg"
        :alt="movie.title"
      />
    </div>
    <div class="movie-details__description">
      <span class="movie-details__date">{{
        movie.release_date | TransformDate
      }}</span>
      <span class="movie__rate">{{ movie.vote_average }}</span>
      <p class="movie__overview">{{ movie.overview }}</p>
    </div>
  </section>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";

export default {
  name: "MovieDetails",

  setup() {
    const movie = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${env.apikey}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => {
          movie.value = data;
        });
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
