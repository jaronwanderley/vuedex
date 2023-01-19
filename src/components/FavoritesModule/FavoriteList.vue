<script setup lang="ts">
const isOpenSide = $ref(false)
const { add, isOnList, list, remove } = favoritePokemons
</script>

<template>
  <RightDrawer
    v-model="isOpenSide"
    title="Favorites"
  >
    <template #button>
      <div class="i-tabler-list-details"></div>  
      <span class="hidden sm:block">Favorites</span>
    </template>

    <div v-auto-animate class="flex flex-col gap-3 pl-4 py-4 pr-2">
      <FavoriteCell
        v-for="pokemon in list"
        :key="pokemon.id"
        :data="pokemon"
        @click="remove(pokemon.id)"
      />
    </div>
  </RightDrawer>
</template>