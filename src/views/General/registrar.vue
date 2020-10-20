<template>
  <b-container>
    <div class="content mt-4">
      <b-row class="" align-h="center" align-v="center">
        <b-col sm="12" md="6">
          <div class="fondo_registrar"></div>
        </b-col>

        <b-col sm="12" md="4">
          <b-row>
            <b-col cols="12" class="text-left my-2">
              <h4>
                Registrarte en
                <b>Store<span class="text-primary">Vani</span></b>
              </h4>
            </b-col>
            <b-col cols="12" class="my-2">
              <label for="" class="m-0"><b>Nombre:</b></label>
              <b-form-input type="text" placeholder="tu nombre"></b-form-input>
            </b-col>
            <b-col cols="12" class="my-2">
              <label for="" class="m-0"><b>Correo:</b></label>
              <b-form-input
                type="text"
                placeholder="negocio@email.com"
              ></b-form-input>
            </b-col>
            <b-col cols="12" class="my-2">
              <label for="" class="m-0"><b>Telefono/Celular:</b></label>
              <b-form-input
                type="text"
                placeholder="809-your-number"
              ></b-form-input>
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
              <b-button variant="primary" block> Registrarte </b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>
<script>
export default {
  name: "Registrar",
};
</script>
<style lang="scss" scoped >
.fondo_registrar {
  width: 80%;
  height: 80vh;
  background: url("../../assets/registrar.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (max-width: 775px) {
    width: 100%;
    height: 40vh;
  }
}
</style>