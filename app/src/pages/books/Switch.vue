<template>
  <div>
    <ion-row class="switch-header">
      <ion-col col-6>
        <ion-icon name="contact"></ion-icon>
      </ion-col>

      <ion-col col-6>
        <router-link to="/full/chat-list">
          <ion-icon class="float-right" name="chatbubbles"></ion-icon>
        </router-link>
      </ion-col>
    </ion-row>

    <div class="card-background-page">
      <ion-card>
        <img
          class="card-img"
          src="https://www.livrariasfamiliacrista.com.br/media/catalog/product/cache/1/image/800x/56819907b1c49a4bc751319b3fccb0da/m/a/max_livro.jpg"/>
        <div class="card-title">Madison</div>
      </ion-card>
    </div>

    <ion-row class="row-actions text-center">
      <ion-col col-4>
        <button type="button" class="circle" ion-button color="light">
          <ion-icon name="close"></ion-icon>
        </button>
      </ion-col>

      <ion-col col-4>
        <button type="button" class="circle" ion-button color="light">
          <ion-icon name="star"></ion-icon>
        </button>
      </ion-col>

      <ion-col col-4>
        <button type="button" class="circle" ion-button color="light">
          <ion-icon name="heart"></ion-icon>
        </button>
      </ion-col>
    </ion-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card-background-page ion-card {
  padding: 10px;
  position: relative;
  text-align: center;
  border-radius: 10px;
}

.card-background-page .card-title {
  text-shadow: 5px 5px 5px rgba(0,0,0,0.5);
  position: absolute;
  top: 36%;
  font-size: 2.0em;
  width: 100%;
  font-weight: bold;
  color: #fff;
}

.switch-header .icon {
  font-size: 32px;
}

.row-actions .icon {
  font-size: 38px;
}
</style>
