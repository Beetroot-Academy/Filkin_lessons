<template>
  <section class="movies container">
    <div class="search">
      <h2 class="search__title">Search</h2>
      <form
        class="search__form"
        @submit.prevent="SearchMovies"
        @keyup.enter="SearchMovies"
      >
        <input
          type="text"
          id="input__search"
          placeholder="Enter the title.."
          required
          v-model="search"
        />

        <input type="submit" value="Search" id="input__submit" />
      </form>
    </div>
    <div class="movies-list container">
      <div class="movie" v-for="movie in movies" :key="movie.id">
        <router-link :to="'/movie' + movie.id">
          <img
            :alt="movie.title"
            class="movie__img"
            :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
          />
          <div class="movie__details">
            <div class="movie__bar">
              <span class="movie__date">{{
                movie.release_date | TransformDate
              }}</span>
              <span class="movie__rate">{{ movie.vote_average }}</span>
            </div>
            <h3 class="movie__title">{{ movie.title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import env from "@/env.js";

export default {
  name: "SearchPage",

  setup() {
    const search = ref("");
    const movies = ref([]);
    const SearchMovies = () => {
      if (search.value != "") {
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${env.apikey}&query=${search.value}`
        )
          .then((response) => response.json())
          .then((data) => {
            movies.value = data.results;
            search.value = "";
            console.log(movies.value);
          });
      }
    };
    return {
      search,
      movies,
      SearchMovies,
    };
  },
  filters: {
    TransformDate(string) {
      if (string == undefined) {
        return "Date not found";
      } else {
        let options = { year: "numeric", month: "long", day: "numeric" };
        const [year, month, day] = string.split("-");
        return new Date(year, month - 1, day).toLocaleDateString(
          "en-US",
          options
        );
      }
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.movies {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #000;
  background-image: none;
}

.search {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  &__title {
    font-family: "Londrina Outline", cursive;
    font-size: 60px;
    margin: 50px 0;
    text-align: center;
  }
}

.search__form {
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

#input__submit {
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid #fff;
  font-family: "Londrina Outline";
  padding: 5px 10px;
  transition: all 0.5s ease-in-out;
  border-radius: 5px;
  &:hover {
    font-family: "Londrina Solid";
    background-color: #fff;
    color: #000;
  }
}

.movies-list {
  margin-bottom: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
}

.movie {
  width: 300px;
  height: 550px;
  max-height: 580px;
  display: flex;
  flex-direction: column;
  z-index: 5;
  border: 1px solid #fff;
  overflow: hidden;
  &__img {
    width: 100%;
    height: 400px;
  }

  &__details {
    padding: 10px;
  }
  &__bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 8;
  }

  &__title {
    font-size: 28px;
    color: #fff;
    line-height: 1.2;
    text-overflow: ellipsis;
  }

  &__date {
    font-family: "Londrina Solid", cursive;
    font-size: 18px;
    color: #fff;
  }

  &__rate {
    font-family: "Londrina Solid", cursive;
    font-size: 18px;
    color: #fff;
  }
}
</style>
