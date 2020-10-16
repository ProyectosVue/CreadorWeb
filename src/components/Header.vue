<template>
  <div>
    <header class="text-dark">
      <b-container>
        <b-row align-h="center" align-v="center">
          <b-col cols="12" md="6" class="text-center text-md-left">
            <router-link to="/">
              <h4 class="m-0 text-dark">Store<span class="text-primary">Vani</span></h4>
            </router-link>
          </b-col>
          <b-col
            cols="12"
            md="6"
            class="pt-3 pt-md-0 text-center text-md-right"
          >
            <router-link to="/" class="mx-3">Inicio</router-link>
            <router-link to="/Categorias" class="mx-3">Categorias</router-link>
            <router-link to="/perfil" class="mx-3">Perfil</router-link>
            <b-button size="sm" variant="primary" class="text-white">
              <router-link to="/about" class="text-white">
                <i class="far fa-user-circle mr-1"></i>Crear perfil
              </router-link>
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </header>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
header {
  width: 100%;
  padding: 1.2em 0;
  box-shadow: 0 1px 10px #090a0a21;
  h4 {
    font-weight: bold;
    font-size: 150%;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif !important;
  }
}

a {
  color: #2c3e50 !important;
  border-bottom: 2px solid #42b98300;
  text-decoration: none;
  font-weight: 600;

  &.router-link-exact-active {
  }
}
</style>
