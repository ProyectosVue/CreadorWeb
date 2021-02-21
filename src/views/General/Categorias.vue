<template>
  <b-container>
    <b-row class="text-center py-4 my-4" align-h="center">
      <b-col md="12" lg="8">
        <h2><b>Categorias</b></h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          natus sunt aperiam!
        </p>
      </b-col>
    </b-row>

    <b-row align-h="center" align-v="center">
      <b-col v-for="categoria in categorias" :key="categoria.id" cols="2">
        <Tarjeta_Categoria
          :link="`categoria/${categoria.link}`"
          :icono="categoria.icono"
          :titulo="categoria.titulo"
        />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="auto">
        <el-card :body-style="{ padding: '0px' }" style="width:250px">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image w-100"
          />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom clearfix">
              <time class="time"></time>
              <el-button type="text" class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Tarjeta_Categoria from "@/components/Categorias/Tarjeta_Categoria.vue";

export default {
  name: "Categorias",
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
          icono: "fas fa-store-alt",
          titulo: "Moda",
          descripcion: "Lo mas destacado en moda y belleza",
        },
        {
          id: 2,
          link: "categoria_2",
          icono: "fas fa-utensils",
          titulo: "Restaurantes",
        },
        {
          id: 3,
          link: "categoria_3",
          icono: "fas fa-cash-register",

          titulo: "Comida y hogar",
        },
        {
          id: 4,
          link: "categoria_4",
          icono: "fas fa-glass-martini-alt",
          titulo: "Recreativo",
        },
        {
          id: 5,
          link: "categoria_4",
          icono: "fas fa-money-bill-alt",
          titulo: "Negocios",
        },
        {
          id: 6,
          link: "boutique-hombre",
          icono: "fas fa-male",
          titulo: "Hombre",
        },
        {
          id: 7,
          link: "boutique-mujer",
          icono: "fas fa-female",
          titulo: "Mujer",
        },
        {
          id: 8,
          link: "servicios",
          icono: "fas fa-concierge-bell",
          titulo: "Servicios",
        },
        {
          id: 9,
          link: "viajes",
          icono: "fas fa-plane-arrival",
          titulo: "Viajes",
        },
        {
          id: 10,
          link: "categoria_4",
          icono: "fas fa-hamburger",
          titulo: "Comida rapida",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
</style>
