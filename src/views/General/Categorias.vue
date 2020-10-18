<template>
  <b-container>
    <b-row class="text-center py-4 my-4" align-h="center">
      <b-col md="12" lg="8">
        <h2><b>Descubre los negocios mas top</b></h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          natus sunt aperiam!
        </p>
      </b-col>
    </b-row>

    <b-row>
      <b-col v-for="categoria in categorias" :key="categoria.id">
        <Tarjeta_Categoria
          :link="`categoria/${categoria.link}`"
          :imgSrc="categoria.imgSrc"
          :titulo="categoria.titulo"
        />
      </b-col>
    </b-row>

    <b-row class="mt-4" align-h="start">
      <b-col lg="8" class="text-left">
        <h2><b>Que son las categorias?</b></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
          necessitatibus praesentium laborum! Perspiciatis ipsum quaerat vero,
          amet quod quas autem.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Tarjeta_Categoria from "@/components/Categorias/Tarjeta_Categoria.vue";

export default {
  name: 'Categorias',
  components: {
    Tarjeta_Categoria,
  },

  mounted() {
    this.$root.$refs.Categorias = this;
  },

  data() {
    return {
      categorias: [
        {
          id: 1,
          link: "categoria_1",
          imgSrc:
            "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg",
          titulo: "Categoria 1",
        },
        {
          id: 2,
          link: "categoria_2",
          imgSrc:
            "https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_960_720.jpg",
          titulo: "Categoria 2",
        },
        {
          id: 3,
          link: "categoria_3",
          imgSrc:
            "https://cdn.pixabay.com/photo/2016/11/29/09/00/abundance-1868573_960_720.jpg",
          titulo: "Categoria 3",
        },
        {
          id: 4,
          link: "categoria_4",
          imgSrc:
            "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg",
          titulo: "Categoria 4",
        },
        {
          id: 5,
          link: "categoria_5",
          imgSrc:
            "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg",
          titulo: "Categoria 5",
        },
        {
          id: 6,
          link: "categoria6",
          imgSrc:
            "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg",
          titulo: "Categoria 6",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
</style>
