<!-- eslint-disable max-len -->
<template>
  <div class="col">
    <img class="img-fluid" :src="('https://image.tmdb.org/t/p/w500' + image)" alt="">
    <ul>
        <li>{{ title }}</li>
        <li v-if="(title != originalTitle)">{{ originaTitle }}</li>
        <li><font-awesome-icon v-for="stars in (parseInt(vote/2))" :key="stars" icon="fa-solid fa-star" style="color:gold"/></li>
        <li><span :class="('fi fi-' + (originalLanguage != 'en' ? originalLanguage : 'gb'))"></span></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    originaTitle: String,
    vote: Number,
    originalLanguage: String,
    image: String,
  },
};
</script>

<style lang="scss" scoped>
ul{
  list-style: none;
  display: none;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

li{
  color: white;
  margin: 1rem 0;
  font-size: 20px;
}

img{
  border-radius: 10px;
  :hover{
    display: none;
  }
}

col{
  background-color: black;
  padding: 0;
  border-radius: 10px;
  :hover ul{
    display: flex;
  }
}
</style>
