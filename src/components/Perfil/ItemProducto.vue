<template>
  <div>
    <b-row align-v="center">
      <b-col lg="6">
        <b-card-img :src="datos.dt.img"></b-card-img>
      </b-col>
      <b-col lg="6">
        <h5>{{ datos.dt.nombre }}</h5>
        <b-card-text>
          {{ datos.dt.descripcion }}
        </b-card-text>
        <b-button class="mt-2 px-3 text-light" variant="primary" size="sm"
          href="https://api.whatsapp.com/send?phone=18299635218"  target="_blank"
          ><i class="fab fa-whatsapp mr-1"></i> Pedir ya</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    datos: Object,
  },
  data() {
    return {
      data: {
        nombre: "no se",
        descripcion: "sadfdsafsa",
      },
    };
  },
};
</script>
<style lang="scss">
.cardPerfil {
  width: 500px;
  height: 20vh;
  border: 1px solid black;
}
</style>
