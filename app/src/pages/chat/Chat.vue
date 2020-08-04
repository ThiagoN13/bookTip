<template>
  <ion-page>
    <div class="menu">
      <div class="back">
        <router-link to="/full/chat-list">
          <ion-icon name="arrow-back" class="icon-back"></ion-icon>
          <img src="https://i.imgur.com/DY6gND0.png" draggable="false" />
        </router-link>
      </div>
      <div class="name">Alex</div>
      <div class="last">18:09</div>
    </div>

    <div class="screen">
      <div class="conversation">
        <div class="messages messages--received">
          <div class="message">This codepen is an exemple of</div>
          <div class="message">how to create the Facebook thumb up</div>
        </div>
        <div class="messages messages--sent">
          <div class="message">Try to type</div>
          <div class="message">or click the thumb up!</div>
          <div class="message">;)</div>
        </div>
        <div class="messages messages--received">
          <div class="message">Enjoy!</div>
        </div>
      </div>
      <div class="text-bar">
        <form class="text-bar__field" id="form-message">
          <input type="text" placeholder="Type or thumb up ;)" />
        </form>
        <div class="text-bar__thumb">
          <ion-icon name="send"></ion-icon>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script>
export default {
  name: 'Chat'
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
  width: 90px;
  height: 50px;
  color: #fff;
  line-height: 45px;
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
  top: 3px;
  left: 110px;
  font-size: 25px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.98);
  cursor: default;
}
.last {
  position: absolute;
  top: 30px;
  left: 110px;
  font-family: "Lato";
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  cursor: default;
}

.screen {
  background-color: #fff;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}
.conversation {
  padding: 10px;
  height: calc(100% - 50px);
  overflow: auto;
  padding-bottom: 0;
}
.messages {
  margin-bottom: 10px;
}
.messages--received .message {
  float: left;
  background-color: #ddd;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}
.messages--received .message:first-child {
  border-top-left-radius: 15px;
}
.messages--received .message:last-child {
  border-bottom-left-radius: 15px;
}
.messages--sent .message {
  float: right;
  background-color: #1998e6;
  color: #fff;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
.messages--sent .message:first-child {
  border-top-right-radius: 15px;
}
.messages--sent .message:last-child {
  border-bottom-right-radius: 15px;
}
.message {
  display: inline-block;
  margin-bottom: 2px;
  clear: both;
  padding: 7px 13px;
  font-size: 12px;
  border-radius: 15px;
  line-height: 1.4;
}
.message--thumb {
  background-color: transparent !important;
  padding: 0;
  margin-top: 5px;
  margin-bottom: 10px;
  width: 20px;
  height: 20px;
  border-radius: 0px !important;
}
.text-bar {
  height: 50px;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ccc;
}
.text-bar__field {
  float: left;
  width: calc(100% - 50px);
  height: 100%;
}
.text-bar__field input {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  border: none;
  position: relative;
  vertical-align: middle;
  font-size: 14px;
}
.text-bar__thumb {
  font-size: 22px;
  float: left;
  width: 50px;
  height: 100%;
  padding: 10px;
}
.text-bar__thumb:hover {
  opacity: 0.8;
}
.text-bar__thumb .thumb {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.thumb {
  display: block;
}
.anim-wiggle {
  animation: wiggle 0.2s ease infinite;
}
.anim-wiggle-2 {
  animation: wiggle2 0.2s ease infinite;
}
@keyframes wiggle {
  0% {
    transform: rotateZ(5deg);
  }
  50% {
    transform: rotateZ(-5deg);
  }
  100% {
    transform: rotateZ(5deg);
  }
}
@keyframes wiggle2 {
  0% {
    transform: rotateZ(10deg);
  }
  50% {
    transform: rotateZ(-10deg);
  }
  100% {
    transform: rotateZ(10deg);
  }
}
</style>
