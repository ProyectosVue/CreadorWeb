<template>
  <main class="home">
    <b-container>
      <div class="content">
        <b-row align-v="center" align-h="center">
          <b-col cols="12" md="6" class="text-left pb-4 pb-md-0">
            <h1>
              <b>
                Servicios <span class="text-primary">online</span> para tu
                negocio y/o emprendimiento.
              </b>
            </h1>
            <p>
              StoreVani es una aplicacion web para alojar a todos los negocios de esta
              provincia, con el objetivo de impulsar la informacion online y
              ventas de negocios.
            </p>
            <b-button
              to="/about"
              variant="primary"
              size="lg"
              class="mt-2 w-50 text-white"
              style="font-size: 16px"
            >
              <b>Comenzar</b>
            </b-button>
          </b-col>
          <b-col cols="12" md="6" class="pt-4 pt-md-0 text-center">
            <img src="@/assets/real.svg" id="img" alt="" />
          </b-col>
        </b-row>
        <b-row class="mt-5 pt-5" align-h="start">
          <b-col cols="12" md="8" class="text-left">
            <h3><b>¿De que se trata esto?</b></h3>
            <p>
              En<b>Store<span class="text-primary">Vani</span></b>
              estamos dispuesto ayudar a los comercios de nuestra region, por ende
              les ofrecemos presencia online profecional y a la vez que puedan generar
              ingresos sin la necesidad de invertir una millonada.
            </p>
          </b-col>
          <b-col cols="12" class="my-4">
            <b-row class="text-left" align-v="center" align-h="center">
              <b-col cols="12" md="4" class="py-2">
                <i
                  class="far fa-hand-point-down pb-2 text-primary"
                  style="font-size: 3em"
                ></i>
                <h4>Profesional</h4>
                <p>
                  Información al alcance de un
                  <span class="text-primary">click</span>
                </p>
              </b-col>
              <b-col cols="12" md="4" class="py-2">
                <i
                  class="fas fa-globe-americas pb-2 text-primary"
                  style="font-size: 3em"
                ></i>
                <h4>Profesional</h4>
                <p>
                  Presencia online <span class="text-primary">profesional</span>
                </p>
              </b-col>
              <b-col cols="12" md="4" class="py-2">
                <i
                  class="fas fa-hand-holding-heart pb-2 text-primary"
                  style="font-size: 3em"
                ></i>
                <h4>Profesional</h4>

                <p>
                  Impulsar las <span class="text-primary">ventas online</span>
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style lang="scss">
.content {
  width: 100%;
  margin-top: 4em;
}
#img {
  width: 70%;
  @media (max-width: 635px) {
    width: 80%;
  }
}
</style>
