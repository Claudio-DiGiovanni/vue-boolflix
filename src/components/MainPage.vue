<!-- eslint-disable max-len -->
<template>
  <div class="container">
    <label for="t">
      <input type="text" name="t" id="t" v-model="searchString" @keyup.enter="searchMovie">
    </label>
    <h1>film</h1>
    <ul v-for="movie in arrMovies" :key="movie.id">
      <li>{{ movie.title }}</li>
      <li>{{ movie.original_title }}</li>
      <li><font-awesome-icon v-for="stars in (parseInt(movie.vote_average/2))" :key="stars" icon="fa-solid fa-star" style="color:gold"/></li>
      <li><span :class="('fi fi-' + (movie.original_language != 'en' ? movie.original_language : 'gb'))"></span></li>
      <li><img :src="('https://image.tmdb.org/t/p/w500' + movie.poster_path)" alt=""></li>
    </ul>
    <h1>serie tv</h1>
    <ul v-for="TVShow in arrTVShow" :key="TVShow.id">
      <li>{{ TVShow.name }}</li>
      <li>{{ TVShow.original_name }}</li>
      <li>{{ TVShow.vote_average }}</li>
      <li><span :class="('fi fi-' + (TVShow.original_language != 'en' ? TVShow.original_language : 'gb'))"></span></li>
      <li><img :src="('https://image.tmdb.org/t/p/w500' + TVShow.poster_path)" alt=""></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchString: '',
      arrMovies: null,
      arrTVShow: null,
      imgURL: '',
    };
  },
  methods: {
    searchMovie() {
      axios.get(`https://api.themoviedb.org/3/search/movie?query=${this.searchString}&api_key=4886c22c895eeca818d2be897ecf2417`)
        .then((axiosResponse) => {
          this.arrMovies = axiosResponse.data.results;
        });
      axios.get(`https://api.themoviedb.org/3/search/tv?query=${this.searchString}&api_key=4886c22c895eeca818d2be897ecf2417`)
        .then((axiosResponse) => {
          this.arrTVShow = axiosResponse.data.results;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~flag-icons/css/flag-icons.min.css';
</style>
