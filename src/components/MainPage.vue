<!-- eslint-disable vue/no-async-in-computed-properties -->
<!-- eslint-disable indent -->
<!-- eslint-disable vue/return-in-computed-property -->
<!-- eslint-disable max-len -->
<template>
  <main>
    <div class="container">
      <div class="film row row-cols-md-4 row-cols-2 g-5" v-if="(arrMovies != null)">
        <h1>film</h1>
        <CardMovie v-show="(filtered(movie))" v-for="movie in arrMovies" :key="movie.id" :title="movie.title" :originalTitle="movie.original_title"
          :vote="movie.vote_average" :originalLanguage="movie.original_language" :image="movie.poster_path"
          :overview="movie.overview" />
      </div>
      <div class="series row row-cols-4 g-5" v-if="(arrTVShow != null)">
        <h1>serie tv</h1>
        <CardMovie v-show="(filtered(TVShow))" v-for="TVShow in arrTVShow" :key="TVShow.id" :title="TVShow.name"
          :originalTitle="TVShow.original_name" :vote="TVShow.vote_average" :originalLanguage="TVShow.original_language"
          :image="TVShow.poster_path" :overview="TVShow.overview" />
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import CardMovie from '@/components/CardMovie.vue';

export default {
  components: {
    CardMovie,
  },
  data() {
    return {
      arrMovies: null,
      arrTVShow: null,
      arrGenres: null,
      imgURL: '',
    };
  },
  props: {
    searchString: String,
    selectedGenre: String,
  },
  methods: {
    filtered(movie) {
      if (movie.genre_ids.includes(this.selectedGenre) || this.selectedGenre === 'all') {
        return true;
      }
      return false;
    },
  },
  watch: {
    searchString(newSearchString) {
      axios.get(`https://api.themoviedb.org/3/search/movie?query=${newSearchString}&api_key=4886c22c895eeca818d2be897ecf2417`)
        .then((axiosResponse) => {
          this.arrMovies = axiosResponse.data.results;
          console.log(this.arrMovies);
        });
      axios.get(`https://api.themoviedb.org/3/search/tv?query=${newSearchString}&api_key=4886c22c895eeca818d2be897ecf2417`)
        .then((axiosResponse) => {
          this.arrTVShow = axiosResponse.data.results;
          console.log(this.arrTVShow);
        });
    },
  },
  created() {
    axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=4886c22c895eeca818d2be897ecf2417')
      .then((axiosResponse) => {
        this.arrGenres = axiosResponse.data.genres;
      });
    this.$emit('selectGenre', this.arrGenres);
  },
};
</script>

<style lang="scss" scoped>
@import '~flag-icons/css/flag-icons.min.css';
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');

main {
  margin-top: 10rem;
}

h1 {
  color: white;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  font-family: 'Bungee Shade', cursive;
}
</style>
