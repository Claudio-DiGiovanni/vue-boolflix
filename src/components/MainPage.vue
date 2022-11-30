<!-- eslint-disable max-len -->
<template>
  <div class="container">
    <label for="t">
      <input type="text" name="t" id="t" v-model="searchString" @keyup.enter="searchMovie">
    </label>
    <ul v-for="movie in arrMovies" :key="movie.id">
      <li>{{ movie.title }}</li>
      <li>{{ movie.original_title }}</li>
      <li>{{ movie.vote_average }}</li>
      <li><span :class="('fi fi-' + (movie.original_language != 'en' ? movie.original_language : 'gb'))"></span></li>
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
    };
  },
  methods: {
    searchMovie() {
      axios.get(`https://api.themoviedb.org/3/search/movie?query=${this.searchString}&api_key=4886c22c895eeca818d2be897ecf2417`)
        .then((axiosResponse) => {
          this.arrMovies = axiosResponse.data.results;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~flag-icons/css/flag-icons.min.css';
</style>
