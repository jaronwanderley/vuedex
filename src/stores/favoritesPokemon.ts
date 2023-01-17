interface Pokemon {
  id: number
  name: string
}

const favorites = useStorage('poke-favorites', [] as Pokemon[])

const add = ({id, name}: Pokemon) => favorites.value.push({id, name})
const remove = (pokeId: number) => {
  favorites.value = favorites.value
    .filter(({id}: Pokemon) => id !== pokeId)
}
const list = computed(() => favorites)

export default {
  add,
  remove,
  list,
}