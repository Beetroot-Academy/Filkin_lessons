<template>
  <div>
    <div class="movie" v-for="movie in movies" :key="movie.id">
      <router-link :to="'/movie/tt0409591'">
        <img alt="poster image" class="movie__img" src="@/assets/1.jpg" />
        <div class="movie__details">
          <h3 class="movie__title">Naruto</h3>
          <span class="movie__date">21 Feb 2021</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieContainer",
};
</script>

<style lang="scss">
.movie {
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  z-index: 5;
  border: 1px solid #fff;
  &__img {
    max-width: 100%;
    height: 300px;
  }

  &__details {
    padding: 10px;
  }

  &__title {
    font-size: 28px;
    color: #fff;
  }

  &__date {
    font-family: "Londrina Solid", cursive;
    font-size: 18px;
    color: #fff;
  }
}
</style>
