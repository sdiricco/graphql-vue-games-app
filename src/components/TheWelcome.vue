<script setup lang="ts">
import {useGamesStore} from "@/stores/games"
import { storeToRefs } from "pinia";
import JsonRender from "./JsonRender.vue";

const {games} = storeToRefs(useGamesStore())
</script> 

<template>
  <h1>Games</h1>
  <div>
    networkStatus: {{ games.networkStatus }}
  </div>
  <div>
    loading: {{ games.loading }}
  </div>
  <div v-if="games.error">
    <h1>Error!</h1>
    <JsonRender :value="games.error"></JsonRender>
  </div>
  <div v-else>
    <h1>Result</h1>
    <JsonRender :value="games.result"></JsonRender>
  </div>
</template>
