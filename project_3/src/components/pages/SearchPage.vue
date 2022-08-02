<template>
  <v-app>
    <section class="movies container">
      <div class="search">
        <h2 class="search__title">Search</h2>
        <form class="type">
          <input
            type="radio"
            id="movies"
            value="movie"
            v-model="selectedValue"
            name="type"
            class="type__radio"
          />
          <label for="movies" class="type__label">Movies</label>

          <input
            type="radio"
            id="tvseries"
            value="tv"
            v-model="selectedValue"
            name="type"
            class="type__radio"
          />
          <label for="tvseries" class="type__label">TV Series</label>
        </form>
        <form
          class="search__form"
          @submit.prevent="getContent"
          @keyup.enter="getContent"
        >
          <input
            type="text"
            id="input__search"
            placeholder="Enter the title.."
            v-model="query"
            required
          />

          <input type="submit" value="Search" id="input__submit" />
        </form>
      </div>
      <div class="movies-list container" :pages="pages">
        <div
          class="movie"
          v-for="movie in movies"
          :key="movie.id"
          v-show="selectedValue === 'movie'"
        >
          <button class="like">
            <span class="like__text">&#10084;</span>
          </button>
          <router-link :to="'/movie/' + movie.id">
            <img
              src="@/assets/404.jpg"
              :alt="movie.title"
              v-if="!movie.poster_path"
              class="movie__img"
            />
            <img
              class="movie__img"
              :alt="movie.title"
              :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
              v-else
            />
            <div class="movie__details">
              <div class="movie__bar">
                <span class="movie__date"
                  >{{ movie.release_date | TransformDate }}
                </span>
                <span class="movie__rate"> {{ movie.vote_average }} </span>
              </div>
              <h3 class="movie__title">{{ movie.title }}</h3>
            </div>
          </router-link>
        </div>

        <div
          class="movie"
          v-for="tv in tvseries"
          :key="tv.id"
          v-show="selectedValue === 'tv'"
        >
          <router-link :to="'/tv/' + tv.id">
            <img
              src="@/assets/404.jpg"
              :alt="tv.name"
              v-if="!tv.poster_path"
              class="movie__img"
            />
            <img
              :alt="tv.name"
              class="movie__img"
              :src="'https://image.tmdb.org/t/p/w300' + tv.poster_path"
              v-else
            />
            <div class="movie__details">
              <div class="movie__bar">
                <span class="movie__date">
                  Country: {{ tv.origin_country.join() }}
                </span>
                <span class="movie__rate">{{ tv.vote_average }} </span>
              </div>
              <h3 class="movie__title">{{ tv.name }}</h3>
            </div>
          </router-link>
        </div>
      </div>
      <v-pagination
        v-if="pagination"
        :length="pages"
        total-visible="7"
        v-model="pagenum"
        @click.native="$scrollToTop"
        class="pagination"
      ></v-pagination>
    </section>
  </v-app>
</template>

<script>
export default {
  name: "SearchPage",

  data() {
    return {
      apikey: "4608236be3c999836b08e6b342e284d8",
      query: "",
      movies: [],
      tvseries: [],
      selectedValue: "movie",
      pagenum: 1,
      pages: 0,
    };
  },
  methods: {
    getContent() {
      const path = `/search/${this.query}`;
      if (this.$route.path !== path) {
        this.$router.push({ params: { searchPhrase: this.query } });
      }
      if (this.selectedValue === "movie") {
        this.getMovies();
      } else {
        this.getTV();
      }
    },
    getMovies() {
      this.axios
        .get(
          `https://api.themoviedb.org/3/search/${this.selectedValue}?api_key=${this.apikey}&page=${this.pagenum}&language=en-US&include_adult=false&include_valueo&query=${this.query}`
        )
        .then((response) => {
          this.movies = response.data.results;
          this.pages = response.data.total_pages;
        })
        .catch((err) => console.error(err));
    },
    getTV() {
      this.axios
        .get(
          `https://api.themoviedb.org/3/search/${this.selectedValue}?api_key=${this.apikey}&page=${this.pagenum}&language=en-US&include_adult=false&include_valueo&query=${this.query}`
        )
        .then((response) => {
          this.tvseries = response.data.results;
          this.pages = response.data.total_pages;
        })
        .catch((err) => console.error(err));
    },
    nextPage: function () {
      this.pagenum += 1;
    },
    lastPage: function () {
      this.pagenum -= 1;
    },
  },
  computed: {
    pagination() {
      return !!this.movies?.length || !!this.tv?.length;
    },
  },
  watch: {
    pagenum: function () {
      this.getContent();
    },
    selectedValue: function () {
      this.movies = [];
      this.tvseries = [];
      this.pagenum = 1;
      this.pages = 0;
    },
  },
  filters: {
    TransformDate(date) {
      if (!date) {
        return "Not found";
      } else {
        let options = { year: "numeric", month: "long", day: "numeric" };
        const [year, month, day] = date.split("-");
        return new Date(year, month - 1, day).toLocaleDateString(
          "en-US",
          options
        );
      }
    },
  },
  created() {
    if (this.$route.params.searchPhrase) {
      this.query = this.$route.params.searchPhrase;
      this.getContent();
    }
  },
};
</script>

<style lang="scss">
.movies {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.search {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  &__title {
    margin: 50px 0;
    font-family: "Londrina Outline", cursive;
    font-size: 60px;
    text-align: center;
  }

  &__form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
  }
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
    color: #fff;
  }
}

.type {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin-bottom: 70px;
  gap: 20px;
  &__label {
    font-family: "Londrina Outline", cursive;
    font-size: 30px;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 5px;
    min-width: 135px;
    padding: 10px 0;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  &:hover {
    font-family: "Londrina Solid", cursive;
  }
  &__radio {
    visibility: hidden;
  }
  &__radio:checked + .type__label {
    font-family: "Londrina Solid", cursive;
    font-size: 30px;
    color: #000;
    background-color: #fff;
  }
}

.movies-list {
  margin-bottom: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
}

.movie {
  width: 300px;
  height: 550px;
  max-height: 550px;
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  overflow: hidden;
  position: relative;
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

.pagination {
  font-family: "Londrina Solid", cursive;
  margin-bottom: 40px;
}

@media (max-width: 1007px) {
  .search {
    margin-bottom: 70px;
    &__title {
      margin: 50px 0;
      font-size: 40px;
    }

    &__form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 40px;
    }
  }

  .type {
    margin-bottom: 70px;
    gap: 10px;
    &__label {
      font-size: 25px;
      min-width: 135px;
      padding: 10px 0;
    }
    &__radio:checked + .type__label {
      font-size: 25px;
    }
  }

  .movies-list {
    margin-bottom: 20px;
  }

  .movie {
    width: 300px;
    height: 580px;
    max-height: 580px;

    &__title {
      font-size: 28px;
    }

    &__date {
      font-size: 18px;
    }
    &__rate {
      font-size: 18px;
    }
  }

  #input__search {
    max-width: 350px;
  }

  #input__submit {
    max-width: 200px;
    padding: 5px 10px;
  }
}

@media (max-width: 641px) {
  .search {
    margin-bottom: 50px;
    &__title {
      margin: 40px 0;
      font-size: 40px;
    }

    &__form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 40px;
    }
  }

  .type {
    margin-bottom: 40px;
    gap: 10px;
    &__label {
      font-size: 25px;
      min-width: 135px;
      padding: 10px 0;
    }
    &__radio:checked + .type__label {
      font-size: 25px;
    }
  }
}
</style>
