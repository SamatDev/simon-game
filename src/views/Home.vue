<template>
  <div class="home">
    <div class="container">
      <h1>Simon Says</h1>
      <div class="simon">
        <ul>
          <li class="red" ref="1" @click="clickChecker(1)" v-bind:class="{'hoverable' : status }"></li>
          <li class="blue" ref="2" @click="clickChecker(2)" v-bind:class="{'hoverable' : status }"></li>
          <li class="yellow" ref="3" @click="clickChecker(3)" v-bind:class="{'hoverable' : status }"></li>
          <li class="green" ref="4" @click="clickChecker(4)" v-bind:class="{'hoverable' : status }"></li>
        </ul>
      </div>
      <div class="game-info">
        <h2>
          Round:
          <span>{{level}}</span>
        </h2>
        <button @click="gameStarter()" v-bind:disabled="starterStatus">Start</button>
        <p>
          {{ message }}
        </p>
      </div>
      <div class="game-options">
        <h2>Game Options:</h2>
        <input type="radio" name="mode" value="3.75" checked v-model="mode" />Легкий
        <br />
        <input type="radio" name="mode" value="2.5" v-model="mode"/>Средний
        <br />
        <input type="radio" name="mode" value="1" v-model="mode"/>Сложный
        <br />
      </div>
    </div>
    <div data-action="sound" ref="sounds">
      <audio preload v-for="sound in sounds" :key="sound.id" :src="publicPath + sound.src" :ref="'sound ' + sound.id">
        <source :src="publicPath + sound.src">
      </audio>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      randoms: [],
      level: 0,
      clickCount: 0,
      message: '',
      mode: 1,
      status: false,
      starterStatus: false,
      tumblerTimer: 400,
      sounds: [
        { id: 1, src: `audio/1.mp3` },
        { id: 2, src: `audio/2.mp3` },
        { id: 3, src: `audio/3.mp3` },
        { id: 4, src: `audio/4.mp3` }
      ]
    };
  },
  methods: {
    colorTumbler: function() {
      for(let i = 0; i < this.randoms.length; i++) {
        setTimeout(() => {
          this.$refs[this.randoms[i]].style.opacity = 1

          this.$refs[`sound ` + this.randoms[i]][0].play()

          setTimeout(() => {
            this.$refs[this.randoms[i]].style.opacity = 0.6
            this.$refs[`sound ` + this.randoms[i]][0].pause()
          }, this.tumblerTimer - 100);
        }, i * this.tumblerTimer);
      }
    },
    gameStarter: function() {
      this.starterStatus = true
      this.status = true
      this.level++
      this.getRandom(1, 4)
      this.colorTumbler()
    },
    getRandom: function (min, max) { 
      min = Math.ceil(min);
      max = Math.floor(max);
      this.randoms.push(Math.floor(Math.random() * (max - min + 1)) + min);
    },
    clickCounter: function () {
      this.clickCount++
    },
    clickChecker: function (colorId) {
      if(this.status) {
        this.$refs[colorId].style.opacity = 1
        setTimeout(()=> {
          this.$refs[colorId].style.opacity = 0.6
        }, 500)
        if(this.clickCount === this.randoms.length - 1 && this.randoms[this.clickCount] === colorId) {
          this.clickCount = 0
          this.message = "Отлично! Следующий уровень!"
          this.status = false
          setTimeout(() => {
            this.gameStarter()
          }, 1000);
          this.$refs[`sound ` + colorId][0].play()
        } else if (this.randoms[this.clickCount] === colorId) {
          this.clickCounter()
          this.$refs[`sound ` + colorId][0].play()
          this.message = "Хорошо, следующий клик!"
        } else {
          this.message = "Проигрыш, твой последний успех " + this.level + " уровень."
          this.$refs[`sound ` + colorId][0].play()
          this.clickCount = 0
          this.randoms = []
          this.level = 0
          this.starterStatus = false
          this.status = false
        }
      } else {
        this.message = "Жми старт, что бы начать/продолжить игру c " + this.level + " уровня!"
        this.status = false
        this.starterStatus = false
      }
    },
    
  },
  watch: {
    mode: function() {
      this.tumblerTimer = +this.mode * 400
    }
  }
};
</script>
