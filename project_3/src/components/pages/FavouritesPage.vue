<template>
  <v-app>
    <div class="favourites container">
      <h2 class="favourites__title">Favourites</h2>
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
      <div class="movies-list container" :pages="pages">
        <div
          class="movie"
          v-for="movie in movies"
          :key="movie.id"
          v-show="selectedValue === 'movie'"
        >
          <button class="like" @click="toggleMovies()">
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
    </div>
  </v-app>
</template>

<script>
export default {
  name: "FavouritesPage",
  data() {
    return {
      favShowIds: [],
      favShowInfo: {},
      favShowsData: [],
      favMovieIds: [],
      favMovieInfo: {},
      favMoviesData: [],
      favouritemovies: [],
      favouriteshows: [],
      apikey: "4608236be3c999836b08e6b342e284d8",
      movies: [],
      tvseries: [],
      selectedValue: "movie",
      pagenum: 1,
      pages: 0,
      pagination: false,
      noshows: true,
      nomovies: true,
    };
  },
  methods: {
    getContent() {
      if (this.selectedValue === "movie") {
        this.getMovies();
      } else {
        this.getTV();
      }
    },
    getMovies() {
      for (let i = 0; i < this.favmoviesdds.length; i++) {
        this.axios
          .get(
            `https://api.themoviedb.org/3/${this.selectedValue}/${this.favShowId[i]}?api_key=${this.apikey}&page=${this.pagenum}&language=en-US`
          )
          .then((response) => {
            this.favmovieinfo = response.data;
            this.favmoviesdata.push(this.favmovieinfo);
            this.pages = response.data.total_pages;
            if (this.movies.length > 0) {
              this.pagination = true;
            }
            console.log(this.movies);
            console.log(this.movies.value);
          })
          .catch((err) => console.error(err));
      }
    },
    getTV() {
      for (let i = 0; i < this.favshowids.length; i++) {
        this.axios
          .get(
            `https://api.themoviedb.org/3/search/${this.selectedValue}?api_key=${this.apikey}&page=${this.pagenum}&language=en-US&include_adult=false&include_valueo&query=${this.query}`
          )
          .then((response) => {
            this.favshowinfo = response.data;
            this.favshowsdata.push(this.favshowinfo);
            this.pages = response.data.total_pages;
            if (this.movies.length > 0) {
              this.pagination = true;
            }
            console.log(this.tvseries);
            console.log(this.tvseries.value);
          })
          .catch((err) => console.error(err));
      }
    },
    nextPage: function () {
      this.pagenum += 1;
    },
    lastPage: function () {
      this.pagenum -= 1;
    },
    checkStorage() {
      if (localStorage.getItem("favouriteshows")) {
        try {
          this.favshowids = JSON.parse(localStorage.getItem("favouriteshows"));
        } catch (e) {
          localStorage.removeItem("favouriteshows");
        }
      }

      if (localStorage.getItem("favouritemovies")) {
        try {
          this.favmovieids = JSON.parse(
            localStorage.getItem("favouritemovies")
          );
        } catch (e) {
          localStorage.removeItem("favouritemovies");
        }
      }
    },
  },
  watch: {
    pagenum: function () {
      this.getContent();
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
    this.getContent();
    this.checkStorage();
  },
};
</script>

<style lang="scss">
.favourites {
  display: flex;
  flex-direction: column;
  width: 100%;
  &__title {
    margin: 50px 0;
    font-family: "Londrina Outline", cursive;
    font-size: 60px;
    text-align: center;
  }
}
.movies-list {
  margin-bottom: 70px;
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
</style>
