<script setup>
import {launch} from "@/phaser.config";
import {onMounted} from "vue";
const containerId = "game-container"

onMounted(() =>{
  launch(containerId)
})
</script>

<template>
  <div class="flex flex-col">
    <h1>Cthulu</h1>

    <div :id="containerId"></div>
  </div>
</template>

<style scoped>
</style>
