<template>
  <v-app>
    <section class="discover">
      <h2 class="discover__title">Discover Movies</h2>
      <div class="discover__sort">
        <form class="discover__form">
          <input
            type="radio"
            id="top-rated"
            value="top_rated"
            v-model="selectedValue"
            name="discover"
            class="discover__radio"
            @change="getContent"
          />
          <label for="top-rated" class="discover__label">Top Rated</label>

          <input
            type="radio"
            id="popular"
            value="popular"
            v-model="selectedValue"
            name="discover"
            class="discover__radio"
            @change="getContent"
          />
          <label for="popular" class="discover__label">Popular</label>

          <input
            type="radio"
            id="now-playing"
            value="now_playing"
            v-model="selectedValue"
            name="discover"
            class="discover__radio"
            @change="getContent"
          />
          <label for="now-playing" class="discover__label">Now Playing</label>

          <input
            type="radio"
            id="upcoming"
            value="upcoming"
            v-model="selectedValue"
            name="discover"
            class="discover__radio"
            @change="getContent"
          />
          <label for="upcoming" class="discover__label">Upcoming</label>
        </form>
      </div>
      <div class="movies-list container">
        <div class="movie" v-for="movie in movies" :key="movie.id">
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
  name: "DiscoverPage",
  components: {},
  data() {
    return {
      selectedValue: "top_rated",
      apikey: "4608236be3c999836b08e6b342e284d8",
      movies: [],
      pagenum: 1,
      pages: 0,
      pagination: false,
    };
  },
  methods: {
    getContent() {
      console.log(this.selectedValue);
      this.axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.selectedValue}?api_key=${this.apikey}&page=${this.pagenum}`
        )
        .then((response) => {
          this.movies = response.data.results;
          this.pages = response.data.total_pages;
          if (this.movies.length > 0) {
            this.pagination = true;
          }
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
  },
};
</script>

<style lang="scss">
.discover {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  &__title {
    font-family: "Londrina Outline", cursive;
    font-size: 60px;
    margin: 50px 0;
    text-align: center;
  }

  &__form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    margin-bottom: 100px;
    gap: 20px;
  }

  &__label {
    font-family: "Londrina Outline", cursive;
    font-size: 30px;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 5px;
    min-width: 170px;
    padding: 10px 0;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      font-family: "Londrina Solid", cursive;
    }
  }

  &__radio {
    visibility: hidden;
  }

  &__radio:checked + .discover__label {
    font-family: "Londrina Solid", cursive;
    font-size: 30px;
    color: #000;
    background-color: #fff;
  }
}

.like {
  visibility: hidden;
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 2;
  border: 1px solid rgb(191, 189, 189);
  border-radius: 50%;
  padding: 7px;
  background-color: rgb(191, 189, 189);
  opacity: 70%;
  &__text {
    padding: 5px;
    color: rgb(149, 147, 147);
  }

  &:hover {
    opacity: 100%;
  }

  &:hover > .like__text {
    color: rgb(97, 96, 96);
  }
}

.movie:hover > .like {
  visibility: visible;
}
</style>
