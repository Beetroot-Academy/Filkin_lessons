<template>
  <div class="header__container container">
    <a href="#" class="logo__link">
      <img src="@/assets/logo.svg" alt="Filmology" class="logo__img" />
    </a>
    <nav class="nav" :class="{ active: isActive }">
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
    </nav>
    <div class="burger" @click="isActive = !isActive">
      <span class="burger__item burger__top"></span>
      <span class="burger__item burger__mid"></span>
      <span class="burger__item burger__bot"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss">
.header__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background-color: #000;
  position: relative;
  z-index: 3;
}

.nav {
  display: flex;
  flex-direction: row;
  gap: 200px;
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

.burger {
  display: none;
  position: relative;
  width: 30px;
  height: 20px;
  cursor: pointer;
  &__item {
    background-color: #fff;
    position: absolute;
    height: 2px;
    width: 20px;
    transition: all 0.3s ease-in-out;
  }

  &__top {
    top: 0;
  }

  &__bot {
    bottom: 0;
  }

  &__mid {
    top: 50%;
    transform: translateY(-50%);
  }

  &.active {
    & .burger__top {
      transform: rotate(45deg);
      top: 9px;
    }

    & .burger__bot {
      transform: rotate(-45deg);
      bottom: 9px;
    }

    & .burger__mid {
      transform: scale(0);
    }
  }

  .active {
    display: flex;
  }
}

@media (max-width: 1007px) {
  .nav {
    display: none;
    flex-direction: column;
    &__list {
      flex-direction: column;
      gap: 40px;
      position: fixed;
      background-color: #000;
      height: 100vh;
      bottom: 0;
      right: 0;
      justify-content: center;
      width: 50%;
      z-index: 2;
    }
  }
  .social__list {
    position: fixed;
    top: 20%;
    right: 17%;
    z-index: 2;
    gap: 5px;
  }

  .logo__img {
    width: 170px;
  }

  .header__container {
    height: 7vh;
  }

  .burger {
    display: block;
  }
}
@media (max-width: 641px) {
  .logo__img {
    width: 150px;
  }
  .burger {
    display: block;
  }
}
</style>
