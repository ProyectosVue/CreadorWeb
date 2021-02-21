<template>
  <b-container class="Categoria">
    <template v-if="categoriaData">
      <div class="mt-4">
        <h3> {{ categoria.titulo }} </h3>
      
      </div>
      {{ categoria }}
    </template>
  </b-container>
</template>
<script>
export default {
  name: "Categoria",
  mounted() {
    this.categoria = this.$root.$refs.Categorias.categorias.find(
      (categoria) => {
        // console.log(categoria.link);
        return categoria.link === this.$route.params.nombre;
      }
    );
  },
  data() {
    return {
      categoria: null,

      probando: this.$route.params.id,
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
<style lang="scss">
#cover {
  height: 100%;
  background: rgba(0, 0, 0, 0.486);
  border-radius: 5px;
  box-shadow: 0px 0px 100px black;
}
#card {
  height: 30vh;
}
</style>