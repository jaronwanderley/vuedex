interface Pokemon {
  id: number
  name: string
  types: string[]
}

const favorites = useStorage('poke-favorites', [] as Pokemon[])

const isOnList = (pokeId: number) => favorites.value.findIndex(({id}: Pokemon) => id === pokeId) > -1
const add = ({id, name, types}: Pokemon) => {
  if(!isOnList(id))
    favorites.value.push({id, name, types: types.map(({type: {name}}: any) => name)})
}
const remove = (pokeId: number) => {
  favorites.value = favorites.value
    .filter(({id}: Pokemon) => id !== pokeId)
}
const toggle = (pokemon: Pokemon) => {
  const { id } = pokemon
  if(isOnList(id)) 
    remove(id)
  else
    add(pokemon)
}

export default {
  add,
  isOnList,
  list: favorites,
  remove,
  toggle,
}