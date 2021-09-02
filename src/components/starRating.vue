<template>
  <p class="text-mute small"> 
    <span @click="returnSelected(item)" 
      v-for="item in 5" 
      :key="item" 
      class="fas fa" 
      :class="classes + ' ' + (editable ? ' mycursor ' : '') + ' ' + (selectedRating<item ? 'fa-star-o' : 'fa-star')">
    </span>
     &nbsp;<slot></slot>
    <template  v-if="editable">{{selectedRating}}</template>
  </p>
</template>
<script>
export default {
  props: {
    classes: {
      required: false
    },
    rating: {
      required: false
    },
    editable: {
      required: false,
      default: false
    }
  },
  data(){
    return {
      selectedRating : this.rating
    }
  },
  methods: {
    returnSelected (item) {
      console.log(item)
      this.$emit('input', item)
      if(this.editable)
        this.selectedRating = item
    }
  }
}
</script>
<style scoped>
.mycursor{
  cursor: pointer;
}
</style>