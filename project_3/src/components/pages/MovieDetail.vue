<template>
  <section class="movie-details container">
    <h2 class="movie-details__title">Details</h2>
  </section>
</template>

<script>
export default {
  name: "MovieDetail",
};
</script>

<style lang="scss">
.movie-details {
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: center;
  width: 100%;
  height: 90vh;
  z-index: 2;
  background-color: #000;
  background-image: none;
}

.movie-details__title {
  font-family: "Londrina Outline", cursive;
  font-size: 60px;
  margin: 50px 0;
}
</style>
