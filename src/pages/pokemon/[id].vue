<script setup lang="ts">
const attrs = useAttrs()
const router = useRouter()

// const {add, remove, list} = toRefs(favoritesPokemon)
const backgroundColors = typeColors().backgroundColors
const mainColors = typeColors().badgeColors

const pokemon = $ref({})
const types = computed(() => pokemon?.types?.map(({type}) => type.name))
const load = async () => {
  try {
    const res = await pokeService.getPokemon(attrs.id)
    pokemon = res
  } catch(error) {
    throwError({
      message: error
    })
  }
}

onMounted(() => {
  load()
})
</script>

<template>
  <div 
    v-if="pokemon.name"
    class="max-w-120 m-auto w-full flex flex-col gap-3"
  >
    <div 
      class="relative p-[64px_16px_16px_16px] mt-[calc(20%+50px)] pointer-events-none z-2"
    >
      <div 
        v-ripple
        class="back-cell absolute top-0 bottom-0 left-0 right-0 bg-red rounded-xl pointer-events-auto overflow-hidden -z-1"
        :style="{
          backgroundColor: backgroundColors[types?.[0]] || '#a8a878',
          boxShadow: `0 0 20px -5px ${backgroundColors[types?.[0]] || '#a8a878'}`
        }"
      ></div>
      <PokemonAvatar
        :id="pokemon.id"
        :name="pokemon.name" 
        class="absolute top-1 left-50% w-[clamp(32px,70%,220px)] -translate-x-50% -translate-y-60%"
      />
      <div
        class="text-left text-gray-6 font-black text-lg leading-3 pl-.2 mix-blend-color-burn tracking-wider"
      >
        {{ formatIndexNumber(pokemon.id) }}
      </div>
      <div class="text-left font-bold text-2xl text-slate-9/80">{{ formatProperName(pokemon.name) }}</div>
      <div class="flex gap-2 mt-1">
        <TypeBadge
          v-for="type in types"
          :key="type"
          :type="type"
        />
      </div>
      <!-- <div 
        v-ripple
        class="absolute right-4 bottom-4 h-8 w-8 hover:bg-slate-9/10 rounded-full pointer-events-auto flex justify-center items-center">
        <div class="i-tabler-heart text-xl text-slate-9/80"></div>
      </div> -->
    </div>

    <Accordion title="Abilities">
      <div class="flex flex-wrap gap-2">
        <Badge 
          v-for="{ability} in pokemon.abilities" 
          :key="ability.url"
        > 
          {{ ability.name }}
        </Badge>
      </div>
    </Accordion>
    <Accordion title="Moves">
      <div class="flex flex-wrap gap-2">
        <Badge
          v-for="{move} in pokemon.moves"
          :key="move.url"
        >
          {{ move.name }}
        </Badge>
      </div>
    </Accordion>
  </div>
  <div
    v-else
    class="flex justify-center"
  >
    <PokeballSpinner />
  </div>
</template>

<style>
.back-cell span {
  background-color: v-bind(mainColors[types?.[0]]);
}
</style>

<route lang="yaml">
meta:
  layout: DetailsLayout
</route>
