<template>
  <div class="perfil">
    <b-container>
      <b-row align-h="center" align-v="center">
        <b-col cols="auto" class="p-4 fondo">
          <div class="perfil__foto" title="Foto de perfil">
            <img
              src="https://es.gravatar.com/userimage/169130396/1f98c32e08eac62c1cc2a233e587fdd4.jpg?size=200"
              alt=""
            />
          </div>
        </b-col>

        <template v-for="dato in tienda1">
          <b-col cols="12" :key="dato.id">
            <div class="perfil__info">
              <b-row class="pt-2 pl-2" align-v="center" align-h="center">
                <b-col cols="12" class="text-center">
                  <h5>
                    <b class="text-primary"> {{ dato.nombre }} </b>
                  </h5>
                  <b class="grays"> {{ dato.descripcion }} </b>
                </b-col>
                <b-col cols="12" class="py-2 text-center greens">
                  {{ dato.direccion }}
                </b-col>
                <b-col cols="12" class="pt-2 text-center">
                  <a href="#" class="mx-2"
                    ><i class="fab fa-facebook-square"></i
                  ></a>
                  <a href="#" class="mx-2"><i class="fab fa-twitter"></i></a>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </template>
      </b-row>

      <b-row align-v="center" align-h="center">
        <b-col cols="12" class="py-4">
          <h4>Servicios</h4>
        </b-col>

        <template v-for="dato in tienda1">
          <b-col cols="6" class="my-2"  v-for="dt in dato.productos" :key="dt.id">
            <b-card>
              <b-row align-v="center" >
                <b-col cols="6">
                  <b-card-img :src="dt.img"></b-card-img>
                </b-col>
                <b-col cols="6">
                  <h5>{{ dt.nombre }}</h5>
                  <b-card-text>
                    {{dt.descripcion}}
                  </b-card-text>
                  <b-button class="mt-2" variant="primary" size="sm"  >Pedir ya</b-button>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </template>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import tienda1Json from "@/data/tienda1.json";

export default {
  mounted() {
    this.tienda1 = tienda1Json;
  },
  data() {
    return {
      tienda1: [],
    };
  },
};
</script>
<style lang="scss">
.perfil {
  width: 100%;
  padding: 0.5em 0;

  h5 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif !important;
  }
  &__foto {
    width: 10em;
    height: 10em;
    border-radius: 10em;
    background-color: rgb(206, 206, 206);
    display: flex;
    flex-direction: column;
    border: 3px solid rgb(245, 245, 245);
    img {
      width: 100%;
      border-radius: 10em;
    }
  }
  &__info {
    width: 100%;

    a {
      font-size: 20px;
      i {
        font-size: 1.5em;
        color: #007bff;
      }
    }
  }
}
</style>