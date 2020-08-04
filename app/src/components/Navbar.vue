<template>
  <div class="navbar">
    <div class="nav-item">
      <ion-icon name="home"></ion-icon>
    </div>

    <div class="nav-item active">
      <ion-icon name="book"></ion-icon>
    </div>

    <div class="nav-item">
      <ion-icon name="menu"></ion-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.navbar {
  background-color: rgba(82, 179, 217, 0.9);
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  flex-direction: row;
  padding-top: 5px;
  flex-wrap: wrap;
}

.navbar .nav-item  {
  text-align: center;
  flex-direction: column;
  display: flex;
  flex-basis: 100%;
  flex: 1;
}

.navbar .nav-item.active  {

}

.navbar .nav-item .icon {
  font-size: 32px;
}
</style>
