<!-- eslint-disable max-len -->
<template>
  <div class="col">
    <img class="img-fluid" :src="('https://image.tmdb.org/t/p/w500' + image)" alt="">
    <ul>
        <li v-if="(title !== originalTitle)">Titolo Originale: {{ originalTitle }}</li>
        <li>
          <font-awesome-icon v-for="stars in (parseInt(vote / 2))" :key="stars" icon="fa-solid fa-star" style="color:gold"/>
          <font-awesome-icon v-for="stars in (5 - parseInt(vote / 2))" :key="(stars + 3)" icon="fa-regular fa-star" style="color:white"/>
        </li>
        <li><span :class="('fi fi-' + (originalLanguage != 'en' ? originalLanguage : 'gb'))"></span></li>
    </ul>
    <h4>{{ title }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    originalTitle: String,
    vote: Number,
    originalLanguage: String,
    image: String,
  },
};
</script>

<style lang="scss" scoped>
ul{
  list-style: none;
  height: 80%;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

li{
  color: white;
  margin: 1rem 0;
  font-size: 20px;
}

h4{
  text-align: center;
  color: white;
}

img{
  border-radius: 10px;
}

.col:hover img{
  display: none;
}

.col:hover ul{
  display: flex;
}

.col:hover{
  background-color: black;
  border-radius: 10px;
}
</style>
