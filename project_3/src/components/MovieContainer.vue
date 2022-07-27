<template>
  <div class="movie">
    <router-link to="/movie/tt0409591">
      <img src="@/assets/1.jpg" alt="" class="movie__img" />
      <div class="movie__details">
        <h3 class="movie__title">Naruto</h3>
        <p class="movie__desription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          dignissimos quas deleniti corporis adipisci nemo blanditiis aliquam
          omnis. Asperiores quis, repudiandae cum facilis maxime cumque ex
          mollitia ipsam deserunt et?
        </p>
      </div>
    </router-link>
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
  height: 500px;
  border: 1px solid #fff;
  &__img {
    max-width: 100%;
    height: 250px;
  }

  &__details {
    padding: 15px;
  }

  &__title {
    font-size: 28px;
  }

  &__desription {
    font-family: "Londrina Solid", cursive;
    font-size: 18px;
  }
}
</style>
