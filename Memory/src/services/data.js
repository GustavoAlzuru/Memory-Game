export const getData = async () => {
    const results = []
    const resultsConcat = []
    try{
      for(let i = 1; i <= 6; i++){
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const result = await data.json()
        const pokemon = {
          id: result.id,
          image: result?.sprites?.front_default,
          match: false
        }
        const pokemonRepeated = {
          id: `${result.id}${i}`,
          image: result?.sprites?.front_default,
          match: false
        }
        results.push(pokemon)
        resultsConcat.push(pokemonRepeated)
      }
      const data = [...results, ...resultsConcat]
      return data
    }catch(err){
      console.error(err)
    }
}