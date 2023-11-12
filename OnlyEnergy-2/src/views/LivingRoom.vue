<template>
  <div class="home__main">
    <h1 class="text-3xl my-5">Living Room/Hall</h1>
    <div class="calculator">
      <h1 class="naming text-2xl mb-5">Lighting standard calculator (per hour)</h1>
      <div class="info__blocks">
        <div class="info__block bg-indigo-500">
          <label>Squared Area:</label>
          <input
            v-model="squaredArea"
            type="text"
            placeholder="Squared Area..(m^2)"
          />
          <label>Height:</label>
          <input v-model="height" type="text" placeholder="Height.." />
        </div>
        <div class="info__block text-3xl">LK = {{ lk }}</div>
        <div class="info__block text-3xl">WATT = {{ watt }}</div>
        <div class="info__block flex flex-col">
          <h3>SUMMA:</h3>
          <p class="text-3xl">{{ summa }} сум</p>
        </div>
      </div>
    </div>
    <button
      class="bg-blue-500 hover:bg-blue-700 mt-3 text-white font-bold py-3 px-6 rounded-full"
      @click="getResult"
    >
      Send
    </button>
    <ProductsList />
  </div>
</template>

<script>
import ProductsList from "../components/ProductsList/ProductsList.vue";
export default {
  data() {
    return {
      squaredArea: null,
      height: null,
      lk: 0,
      watt: 0,
      summa: 0,
    };
  },
  methods: {
    getResult() {
      const sum = 295;
      const holeLK = 200;
      let holeHeight = this.height
      if (this.height <= 2.7) {
        holeHeight = 1;
      } else if (2.7 < this.height && this.height <= 3) {
        holeHeight = 1.2;
      } else if (3 < this.height && this.height <= 3.5) {
        holeHeight = 1.5;
      } else {
        holeHeight = 2;
      }

      this.lk = holeLK * this.squaredArea * holeHeight;
      this.watt = (holeLK * this.squaredArea * holeHeight) / 100;
      this.summa = Math.round(
         ((this.watt * sum) / 1000)
      );
    },
  },
  components: { ProductsList },
};
</script>

<style>
</style>