<template>
  <b-container class="Categoria">
    <template v-if="categoriaData" >
      <router-link to="/categorias">Volver</router-link>
      <h1>Categoria Dinamica  {{ categoriaData.link }} </h1>
    </template>
  </b-container>
</template>
<script>
export default {
  name: "Categoria",
  mounted() {
    // this.$root.$refs.Categorias.categorias.find(res => {
    //     console.log(res.link ===  this.$route.params.nombre);
    
    // })

    this.categoria = this.$root.$refs.Categorias.categorias.find(categoria => {
        // console.log(categoria.link);
        return (
            categoria.link === this.$route.params.nombre
        )
    })

  },
  data() {
    return {
      categoria: null,

    };
  },
  computed: {
    categoriaData() {
      return this.categoria
        ? {
            link: `${this.categoria.link}`,
          }
        : null;
    },
  },
};
</script>