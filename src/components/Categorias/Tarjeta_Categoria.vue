<template>
  <router-link :to="link" @click="clickCategoria">
    <b-row class="cardMio my-3 mx-auto " align-h="center" align-v="center" @click="clickCategoria">
      <b-col cols="12" class="text-center center p-3">
        <i :class="icono" class="text-primary"></i>
        <p class="text-primary">
          {{ titulo }}
        </p>
      </b-col>
    </b-row>
  </router-link>
</template>

<script>
export default {
  name: "Tarjeta_Categoria",
  props: {
    link: String,
    icono: String,
    titulo: String,
  },
  methods:{
    clickCategoria() {
      // alert('hola click categoria')
    }
  }
};
</script>

<style lang="scss">
.cardMio {
  p {
    font-size: 1em;
    &:hover {
      text-decoration: line;
    }
  }
  i {
    font-size: 2em;
  }
  .center {
    background: rgba(1, 0, 7, 0.048);
    border-radius: 5px;
  }
}
</style>