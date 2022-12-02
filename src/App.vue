<template>
  <div>
    <HeaderPage @searchString="search" :arrSelect="arrGenres" @selectedGenre="changeGenre"/>
    <main-page :searchString="searchString"  @selectGenre="createSelect" :selectedGenre="genreId"/>
  </div>
</template>

<script>
import MainPage from '@/components/MainPage.vue';
import HeaderPage from '@/components/HeaderPage.vue';

export default {
  components: {
    MainPage,
    HeaderPage,
  },
  data() {
    return {
      searchString: '',
      arrGenres: [],
      genreId: 'all',
    };
  },
  methods: {
    search(value) {
      this.searchString = value;
    },
    createSelect(value) {
      this.arrGenres = value;
    },
    changeGenre(value) {
      this.genreId = value;
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
  body{
    background-color: gray;
  }
</style>
