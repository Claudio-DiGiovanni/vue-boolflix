<template>
  <div>
    <HeaderPage @searchString="search" />
    <main-page :searchString="searchString" />
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
    };
  },
  methods: {
    search(value) {
      this.searchString = value;
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
