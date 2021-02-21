<template>
  <b-container>
    <div class="content mt-4">
      <b-row class="" align-h="center" align-v="center">
        <b-col sm="12" md="6">
          <div class="fondo_registrar"></div>
        </b-col>

        <b-col sm="12" md="4">
          <b-row>
            <h2 class="text-center"><b>Store<span class="text-primary">Vani</span></b></h2>
            <b-col cols="12" class="text-left my-2">
              <h4>
                Registrarte en
              </h4>
            </b-col>
            <b-col cols="12" class="my-2">
              <label for="" class="m-0"><b>Nombre:</b></label>
              <el-input placeholder=""></el-input>
            </b-col>
            <b-col cols="12" class="my-2">
              <label for="" class="m-0"><b>Correo:</b></label>
              <el-input
                type="email"
                placeholder="introduce tu gmail"
              ></el-input>
            </b-col>
            <b-col cols="12" class="my-2">
              <label for="" class="m-0"><b>Telefono/Celular:</b></label>
              <el-input></el-input>
            </b-col>
            <b-col cols="12" class="my-2">
              <label for="" class="m-0"><b>Nombre de usuario:</b></label>
              <el-input type="text"></el-input>
            </b-col>
            <b-col cols="12" class="my-2">
              <label for="" class="m-0"><b>Contraseña:</b></label>
              <el-input
                placeholder="Please input password"
                v-model="password"
                show-password
              ></el-input>
            </b-col>
            <b-col cols="12">
              <el-alert
                title="error alert"
                type="error"
                description="more text description"
                show-icon
                v-if="alert"
              >
              </el-alert>
            </b-col>
            <b-col cols="12" class="my-2">
              <b-button variant="primary" block @click="open4">
                Registrarte
              </b-button>
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
  data() {
    return {
      password: "",
    };
  },
  methods: {
    open4() {
     this.$message({
       showClose: true,
       message: "Oops, this is a error message.",
       type: "error",
     });
    },
  },
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