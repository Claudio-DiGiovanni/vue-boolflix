<!-- eslint-disable max-len -->
<template>
  <header>
    <div class="container">
      <span>boolflix</span>
      <select name="genre" v-model="genreId" @change="$emit('selectedGenre', genreId)">
        <option value="all" selected>All</option>
        <option v-for="genre in arrSelect" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
      </select>
      <label for="t">
        <input type="text" name="t" id="t" v-model="searchString" @keyup.enter="$emit('searchString', searchString)">
      </label>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchString: '',
      genreId: 'all',
    };
  },
  props: {
    arrSelect: Array,
  },
};
</script>

<style lang="scss" scoped>
  header{
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }

  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7rem;
  }

  span{
    color: red;
    font-size: 50px;
    text-transform: uppercase;
  }
</style>
