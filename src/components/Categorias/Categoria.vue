<template>
  <b-container class="Categoria">
    <template v-if="categoriaData">
      <b-row class="text-center py-2 my-4" align-h="center">
        <b-col cols="12">
          <b-card
            overlay
            :img-src="categoria.imgSrc"
            img-alt="Card Image"
            text-variant="white"
            class="w-100 h-50 text-center align-items-center justify-content-center"
            img-width="100%"
          >
            <b-row align-v="center" align-h="center" id="cover">
              <b-col cols="8" >
                <h2>
                  <b>{{ categoria.titulo }}</b>
                </h2>
                <p class="p-2 text-white">
                    {{categoria.descripcion}}
                </p>
              </b-col>
            </b-row>

          </b-card>
        </b-col>
      </b-row>

      <!-- <router-link to="/categorias">Volver</router-link>
      <h1>Categoria Dinamica {{ categoriaData.link }}</h1>
      {{ categoria.titulo }} -->
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
</style>