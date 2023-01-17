const baseUrl = import.meta.env.VITE_POKEMON_API_URL

const getRegions = () => axios
    .get(`${baseUrl}/region`)
    .then(({data}) => data)

const getPokemon =  (id: number) => axios
    .get(`${baseUrl}/pokemon/${id}`)
    .then(({data}) => data)

const getPokemons = (page = 0, count = 10) => axios
    .get(`${baseUrl}/pokemon-species?offset=${page * count}&limit=${count}`)
    .then(async ({data}) => {
      const { results = [], ...rest } = data || {}
      const pokemons: any[] = []
      for (const {url} of results) {
        const id = +url.replace(/.+\/pokemon-species\/(\d+)\//, '$1')
        const res = await getPokemon(id)
        pokemons.push(res)
      }
      return {results: pokemons, ...rest}
    })

export default {
  getRegions,
  getPokemon,
  getPokemons,
} 