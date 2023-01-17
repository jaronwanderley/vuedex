<script setup lang="ts">
const router = useRouter()

const pokemons = $ref([])
const nextPage = $ref(0)
const isLoading = $ref(false)
const isDisabledScroll = $ref(false)

const loadPokemons = async () => {
  try {
    const { results, next } = await pokeService.getPokemons(nextPage, 12)
    pokemons.push(...results)
    nextPage++
    if(!next) {
      isDisabledScroll = true
      notify({
        message: 'You loaded all Pokémons from the Pokédex!',
        timeout: 5,
      })
    }
  } catch(error) {
    throwError({
      message: error
    })
  }
}

const setAlert = () => {
  throwError({
    message: 'teste...',
  })
}
</script>

<template>
  <infiniteScroll
    v-model="isLoading"
    :on-load="loadPokemons"
    :disabled="isDisabledScroll"
  >
    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <PokemonCell 
        v-for="pokemon in pokemons" 
        :key="pokemon.id" 
        :data="pokemon"
        @click="router.push(`/pokemon/${pokemon.id}`)"
      />
    </div>

    <template #spinner>
      <PokeballSpinner />
    </template>
    <template #over>
      <h2 class="text-xl font-bold py-3">
        No more Pokémons to load!
      </h2>
    </template>
  </infiniteScroll>
</template>
