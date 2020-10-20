<template>
  <b-container>
    <div class="content mt-4">
      <b-row class="" align-h="center" align-v="center">
        <b-col sm="12" md="6" class="text-center">
          <div class="fondo_iniciar"></div>
        </b-col>

        <b-col sm="12" md="4">
          <b-row>
            <b-col cols="12" class="text-left my-2">
              <h4>
                Iniciar Sesión
                <b>Store<span class="text-primary">Vani</span></b>
              </h4>
            </b-col>
            <b-col cols="12" class="my-2">
              <label for="" class="m-0"><b>Usuario:</b></label>
              <b-form-input type="text" placeholder="@admin"></b-form-input>
            </b-col>
            <b-col cols="12" class="my-2">
              <label for="" class="m-0"><b>Contraseña:</b></label>
              <b-form-input type="password" placeholder="******">
              </b-form-input>
            </b-col>
            <b-col cols="12" class="my-2">
              <b-button variant="primary" block> Login </b-button>
            </b-col>
            <b-col cols="12" class="my-2 text-center">
              <a href="#" class="text-dark"> Olvidaste tu Contraseña? </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>
<script>
export default {
  name: "Login",
};
</script>
<style lang="scss" scoped >
.fondo_iniciar {
  width: 80%;
  height: 70vh;
  background: url("../../assets/login.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (max-width:775px) {
      width: 100%;
      height: 40vh;
  }
}
</style>