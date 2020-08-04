<template>
  <ion-content>
    <div class="menu">
      <div class="back">
        <router-link to="/switch">
          <ion-icon name="arrow-back" class="icon-back"></ion-icon>
        </router-link>
      </div>
      <div class="name">Mensagens</div>
    </div>

    <ion-list>
      <ion-item>
        <ion-input type="text" clear-input placeholder="Pesquisar"></ion-input>
      </ion-item>
    </ion-list>

    <ion-list>
      <ion-item-sliding>
        <ion-item>
          <ion-avatar item-start>
            <img src="https://i.imgur.com/DY6gND0.png">
          </ion-avatar>

          <ion-label class="ml-4">
            <h2>Thiago</h2>
            <p>Quero comprar o livro</p>
          </ion-label>
        </ion-item>

        <ion-item-options side="right">
          <button ion-button icon-start color="primary">
            <ion-icon name="text"></ion-icon>
            Apagar
          </button>

          <button ion-button icon-start color="secondary">
            <ion-icon name="call"></ion-icon>
            Bloquear
          </button>
        </ion-item-options>
      </ion-item-sliding>
    </ion-list>
  </ion-content>
</template>

<script>
export default {
  name: 'ChatList'
}
</script>

<style>
/* M E N U */
.menu {
  position: sticky;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 50px;
  background: rgba(82, 179, 217, 0.9);
  z-index: 100;
}

.back {
  height: 100%;
  width: 50px;
  color: #fff;
  font-size: 30px;
  padding-left: 10px;
  cursor: pointer;
}
.back img {
  position: absolute;
  top: 5px;
  left: 30px;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.98);
  border-radius: 100%;
  margin-left: 15px;
}

.back .icon-back {
  color: #fff;
  vertical-align: middle;
}

.back .icon-back .icon-inner {
  display: flex;
}

.back:active {
  background: rgba(255, 255, 255, 0.2);
}

.name {
  position: absolute;
  top: 9px;
  left: 60px;
  font-size: 22px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.98);
  cursor: default;
}
</style>
