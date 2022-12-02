<!-- eslint-disable no-else-return -->
<!-- eslint-disable max-len -->
<template>
  <div class="col">
    <div class="contents">
      <img class="img-fluid" :src="image" alt="">
      <ul>
          <li v-if="(title !== originalTitle)"><strong>Titolo Originale: </strong>{{ originalTitle }}</li>
          <li>
            <font-awesome-icon v-for="stars in (parseInt(vote / 2))" :key="stars" icon="fa-solid fa-star" style="color:gold"/>
            <font-awesome-icon v-for="stars in (5 - parseInt(vote / 2))" :key="stars" icon="fa-regular fa-star" style="color:white"/>
          </li>
          <li><span :class="('fi fi-' + ISO)"></span></li>
          <li><p>{{ overview }}</p></li>
      </ul>
      <h4>{{ title }}</h4>
    </div>
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
    overview: String,
  },
  data() {
    return {
      ISO: this.flag(this.originalLanguage),
    };
  },
  methods: {
    flag(language) {
      if (language === 'en') {
        return 'gb';
      } if (language === 'ja') {
        return 'jp';
      } return language;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=MuseoModerno:wght@400;500&display=swap');

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
  font-family: 'MuseoModerno', cursive;
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

.col:hover .contents{
  background-color: black;
  border-radius: 10px;
}

.col:hover h4{
  display: none;
}
</style>
