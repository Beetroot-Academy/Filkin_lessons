<template>
  <section class="movie-details container">
    <h2 class="movie-details__title">{{ tvInfo.name }}</h2>
    <button @click="$router.go(-1)" class="movie-details__btn">Back</button>
    <div class="movie-details__content">
      <div class="movie-details__img">
         <img
          v-if="!tvInfo.poster_path"
          src="@/assets/404.jpg"
          :alt="tvInfo.name"
          class="movie-details__img"/>
        <img
          v-else
          :src="'https://image.tmdb.org/t/p/w300' + tvInfo.poster_path"
          :alt="tvInfo.name"
          class="movie-details__img"/>
      </div>
      <div class="movie-details__description">
        <p class="movie-details__text">
          <span class="movie-details__headers">
            Genre:
          </span>
          <ul class="movie-details__list">
            <li
              class="movie-details__item"
              v-for="genre in tvInfo.genres"
              :key="genre.id">
                {{ genre.name }}
            </li>
          </ul>
        </p>
         <p class="movie-details__text">
          <span class="movie-details__headers">
            Created by:
          </span>
           <ul class="movie-details__list">
            <li
              class="movie-details__item"
              v-for="name in tvInfo.created_by"
              :key="name.id">
                {{ name.name }}
            </li>
          </ul>
        </p>
         <p class="movie-details__text">
          <span class="movie-details__headers">
            Country:
          </span>
           <ul class="movie-details__list">
            <li
              class="movie-details__item"
              v-for="country in tvInfo.production_countries"
              :key="country.id">
                {{ country.name }}
            </li>
          </ul>
        </p>
        <p class="movie-details__text">
          <span class="movie-details__headers">
            Vote Avarage:
          </span>
            {{
              tvInfo.vote_average
            }}
        </p>
        <p class="movie-details__text">
          <span class="movie-details__headers">
            Seasons:
          </span>
            {{ tvInfo.number_of_seasons }}
        </p>
        <p class="movie-details__text">
          <span class="movie-details__headers">
            Series:
          </span>
            {{
               tvInfo.number_of_episodes
            }}
        </p>
        <p class="movie-details__text">
          <span class="movie-details__headers">
            Overview:
          </span>
            {{ tvInfo.overview }}
        </p>
        <p class="movie-details__text">
          <span class="movie-details__headers">
            Links:
          </span>
          <ul class="movie-details__links__list">
            <li class="movie-details__links__item">
              <a
              :href="tvInfo.homepage"
              class="movie-details__link"
              target="_blank">
              Official Website</a>
            </li> |
            <li class="movie-details__links__item">
          <a
            :href="'https://www.imdb.com/title/' + tvInfo.imdb_id"
            class="movie-details__link"
            target="_blank">
            IMDb</a>
            </li>
            </ul>
        </p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "TVDetails",

  data() {
    return {
      show: "tv/",
      apikey: "4608236be3c999836b08e6b342e284d8",
      id: this.$route.params.id,
      tvInfo: {},
    };
  },
  methods: {
    getTVDetails() {
      this.axios
        .get(
          `https://api.themoviedb.org/3/${this.show}${this.id}?api_key=${this.apikey}`
        )
        .then((response) => {
          this.tvInfo = response.data;
          console.log(this.tvInfo);
        });
    },
  },
  created() {
    this.getTVDetails();
  },
};
</script>

<style lang="scss">
.movie-details {
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 90vh;
  position: relative;

  &__title {
    font-size: 60px;
    margin-bottom: 50px;
    padding-top: 20px;
  }

&__btn {
    text-transform: uppercase;
    background-color: transparent;
    border: 1px solid #fff;
    font-family: "Londrina Outline";
    padding: 5px 10px;
    transition: all 0.5s ease-in-out;
    border-radius: 5px;
    max-width: 150px;
    position: absolute;
    right: 0;
    top: 50px;
    &:hover {
        font-family: "Londrina Solid";
        color: #fff;
  }
}
  &__content {
    display: flex;
    flex-direction: row;
    gap: 80px;
  }

  &__img {
    width: 350px;
    height: 500px;
  }

  &__description {
    display: flex;
    flex-direction: column;
  }

  &__list {
    display: flex;
    flex-direction: row;
    padding-left: 0 !important;
  }

  &__item {
    display: flex;
    flex-direction: row;
  }

  &__headers {
    font-family: "Londrina Outline", cursive;
    min-width: 150px;
  }

  &__text {
    font-family: "Londrina Solid", cursive;
    display: flex;
    flex-direction: row;
    text-align: start;
  }

  &__subtext {
    font-family: "Londrina Solid", cursive;
  }

  &__links__list {
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding-left: 0 !important;
  }

  &__item:after {
    content: ",";
    margin-right: 10px;
  }

  &__item:last-child:after {
    content: ""
  }
}
</style>
