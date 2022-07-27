<template>
  <div>
    <section class="hero">
      <div class="hero__content container">
        <TypingTitle />
        <MyButton @click.native="(isActive = !isActive), showConsole" />
      </div>

      <div class="search" :class="{ active: isActive }">
        <h2 class="search__title">Search</h2>
        <form class="search__type" @submit.prevent="searchMovie()">
          <input
            type="radio"
            id="movies"
            value="movies"
            name="type"
            class="type__radio"
            checked
          />
          <label for="movies" class="type__label">Movies</label>

          <input
            type="radio"
            id="tvseries"
            value="tvseries"
            name="type"
            class="type__radio"
          />
          <label for="tvseries" class="type__label">TV Series</label>

          <input
            type="radio"
            id="jopa"
            value="jopa"
            name="type"
            class="type__radio"
          />
          <label for="jopa" class="type__label">Jopa</label>
        </form>

        <form class="search__film">
          <input
            type="search"
            name="search"
            id="input__search"
            value=""
            placeholder="Enter the title.."
            v-model="search"
          />

          <select name="genre" id="input__genre">
            <option value="placeholder" selected disabled>Genre</option>
            <option value="value2">Drama</option>
            <option value="value3">Horror</option>
          </select>

          <select name="year" id="input__year">
            <option value="placeholder" selected disabled>Year</option>
            <option value="2003">2003</option>
            <option value="2021">2021</option>
          </select>

          <input type="submit" value="Search" id="input__submit" />
        </form>
      </div>
      <div class="movie-list container">
        <MovieContainer />
      </div>
    </section>
  </div>
</template>

<script>
import MyButton from "@/components/elements/Button";
import TypingTitle from "@/components/elements/TypingTitle";
import MovieContainer from "@/components/MovieContainer";
import { ref } from "vue";

export default {
  name: "HeroSection",

  components: {
    MyButton,
    TypingTitle,
    MovieContainer,
  },
  data() {
    return {
      isActive: true, //false
    };
  },
  setup() {
    const search = ref("");
    const movies = ref([]);

    const searchMovies = () => {
      if (search.value != "") {
        console.log(search.value);
      }
    };

    return {
      search,
      movies,
      searchMovies,
    };
  },
};
</script>

<style lang="scss">
.hero {
  width: 100%;
  height: 90vh;
  position: relative;
  display: flex;
  align-items: flex-end;
  background-image: url(@/assets/hero.gif);
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 200px;
}

.hero__content {
  display: flex;
  flex-direction: column;
}

.search {
  display: none;
  flex-direction: column;
  position: absolute;
  text-align: center;
  width: 100%;
  height: 90vh;
  z-index: 2;
  background-color: #000;
  background-image: none;
}

.search__title {
  font-family: "Londrina Outline", cursive;
  font-size: 60px;
  margin: 50px 0;
}

.search__type {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  gap: 20px;
  margin-bottom: 150px;
}

.type__label {
  font-family: "Londrina Outline", cursive;
  font-size: 30px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  min-width: 150px;
  padding: 10px 0;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    font-family: "Londrina Solid", cursive;
  }
}

.type__radio {
  visibility: hidden;
}

.type__radio:checked + .type__label {
  font-family: "Londrina Solid", cursive;
  font-size: 30px;
  color: #000;
  background-color: #fff;
}

.search__film {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
}

#input__search {
  min-width: 350px;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px 10px;
  font-family: "Londrina Solid";
}

#input__genre,
#input__year,
#input__submit {
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px 10px;
  font-family: "Londrina Solid";
  min-width: 100px;
  cursor: pointer;
}

#input__submit {
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid #fff;
  font-family: "Londrina Outline";
  padding: 5px 10px;
  transition: all 0.5s ease-in-out;
  &:hover {
    font-family: "Londrina Solid";
    background-color: #fff;
    color: #000;
  }
}
</style>
