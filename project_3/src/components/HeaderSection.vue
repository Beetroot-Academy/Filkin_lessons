<template>
  <div class="header__container container">
    <a href="#" class="logo__link">
      <img src="@/assets/logo.svg" alt="Filmology" class="logo__img" />
    </a>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link :to="'/'" class="nav__link">Home</router-link>
        </li>
        <li class="nav__item">
          <router-link :to="'/search'" class="nav__link">Search</router-link>
        </li>
        <li class="nav__item">
          <router-link :to="'/discover'" class="nav__link"
            >Discover</router-link
          >
        </li>
        <li class="nav__item">
          <router-link :to="'/favourites'" class="nav__link"
            >Favorites</router-link
          >
        </li>
      </ul>
    </nav>
    <ul class="social__list">
      <li class="social__item">
        <a href="#" class="social__link">
          <font-awesome-icon icon="fa-brands fa-instagram social__icon"
        /></a>
      </li>
      <li class="social__item">
        <a href="#" class="social__link">
          <font-awesome-icon icon="fa-brands fa-facebook social__icon"
        /></a>
      </li>
      <li class="social__item">
        <a href="#" class="social__link">
          <font-awesome-icon icon="fa-brands fa-twitter social__icon"
        /></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
};
</script>

<style lang="scss" scoped>
.header__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background-color: #000;
}

.nav__list {
  display: flex;
  flex-direction: row;
  gap: 80px;
  align-items: center;
}

.nav__link {
  display: block;
  position: relative;
  font-family: "Londrina Solid", cursive;
  font-size: 21px;
  color: #fff;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;
}

.nav__link:hover {
  font-family: "Londrina Outline", cursive;
}

.logo__link {
  padding: 5px;
}

.logo__img {
  width: 200px;
}

.social__list {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.social__link {
  font-size: 21px;
  color: #fff;
  border-radius: 50%;
  padding: 7px 10px;
  transition: all 0.5s ease-in-out;
}

.social__link:hover {
  background-color: #fff;
  color: #000;
}

.social__icon {
  color: #fff;
  font-size: 21px;
}
</style>
