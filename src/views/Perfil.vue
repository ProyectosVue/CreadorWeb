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

        <b-col cols="12">
          <div class="perfil__info">
            <b-row class="pt-2 pl-2" align-v="center" align-h="center">
              <b-col cols="12" class="text-center">
                <h5><b>Spyci Boutique</b></h5>
                <p>Tienda de ropa y accesorios para hombre</p>
              </b-col>
              <b-col cols="12" class="py-2 text-center">
                C/ Manuel de Regla Mota #34
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
      </b-row>

      <b-row align-v="center" align-h="center">
        <b-col cols="12" class="py-4">
          <h4>Servicios</h4>
        </b-col>
        <b-col cols="3"> 1 </b-col>
        <b-col cols="3"> 2 </b-col>
        <b-col cols="3"> 3 </b-col>
        <b-col cols="3"> 4 </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "Perfil",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.perfil {
  width: 100%;
  padding: .5em 0;

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