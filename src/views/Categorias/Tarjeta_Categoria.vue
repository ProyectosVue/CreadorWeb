<template>
  <div>
    <router-link :to="link" class="card">
      <div class="card__fondo">
        <img :src="imgSrc" alt="" />
      </div>
      <div class="card__details">{{ titulo }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
    imgSrc: String,
    titulo: String,
  },
};
</script>

<style lang="scss">
.card {
  width: 20em;
  height: 12vh;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  margin: 1em auto;
  border: 0;

  &__fondo {
    width: 100%;
    height: inherit;
    position: absolute;
    top: 0;
    left: 0;
    img {
      width: inherit;
      height: inherit;
      height: inherit !important;
      object-fit: cover;
    }
  }
  &__details {
    width: inherit;
    height: inherit !important;
    background: rgba(0, 0, 0, 0.384);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    color: white;
    
 }
}
</style>