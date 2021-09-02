<template>
  <div class="price-slider">
    <span>
      from
      <input type="number" @change="filterPricing(this.start)" v-model="start" min="0" max="120000" /> to
      <input type="number" v-model="end" min="0" @change="filterPricing(this.end)" max="120000" />
    </span>
    <div>
      <input v-model="start" class="start"  @change="filterPricing()" :min="startMin" :max="end" :step="step" type="range" />
      <input v-model="end" class="end"  @change="filterPricing()" :min="endMin" :max="endMax" :step="step" type="range" />
      <svg width="100%" height="24">
        <line
          x1="4"
          y1="0"
          x2="300"
          y2="0"
          stroke="#212121"
          stroke-width="12"
          stroke-dasharray="1 28"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      step:500,
      startMin:0,
      startMax:120000,
      endMin:0,
      endMax: 120000,
      min:0,
      max:5000,
      start:0,
      end:50000
    }
  },
  watch: {
    end: {
      deep: true,
      handler: function (val) {
        if(parseInt(val) < parseInt(this.start))
          this.start = val
      }
    },
  },

methods: {
filterPricing () {
 // alert(item)
 var firstVal = this.start
// var endVal = this.end
     // console.log(firstVal)
     // console.log(endVal)
      this.$emit('input', firstVal)
  }
}
};
</script>

<style scoped>
input {
  box-shadow: 0;
  outline: 0;
}
.price-slider {
  width: 300px;
  margin: auto;
  text-align: center;
  position: relative;
  height: 6em;
  display: flex;
  flex-direction: column;
}
.price-slider>span{
  display: block;
  margin-bottom: 24px;
}
.price-slider>div{
  position: relative;
  margin-top: 10px;
}
input.start {
   bottom: 10px;
    
}
input.end {
   top: 20px;
}
.price-slider svg,
.price-slider input[type="range"] {
  position: absolute;
  left: 0;
}

input[type="number"] {
  border: 1px solid #ddd;
  text-align: center;
  font-size: 1.6em;
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"]:invalid,
input[type="number"]:out-of-range {
  border: 2px solid #e60023;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #1da1f2;
}

input[type="range"]:focus::-ms-fill-lower {
  background: #1da1f2;
}

input[type="range"]:focus::-ms-fill-upper {
  background: #1da1f2;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: #1da1f2;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #1da1f2;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}

input[type="range"]::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: #1da1f2;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type="range"]::-moz-range-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #1da1f2;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
}

input[type="range"]::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

input[type="range"]::-ms-fill-lower,
input[type="range"]::-ms-fill-upper {
  background: #1da1f2;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}


input[type="range"]::-ms-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #1da1f2;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
}
</style>