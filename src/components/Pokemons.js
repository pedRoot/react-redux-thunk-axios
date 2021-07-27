import { useDispatch, useSelector } from "react-redux";
import { obtenerPokemonsAction, siguientePokemonAction } from "../redux/pokeDucks";

const Pokemons = () => {

  const dispatch = useDispatch();
  const pokemones = useSelector(store => store.pokemons.array);

  return (
    <div>
      <h2>Lista de Pokemones</h2>
      <ul>
        {
          pokemones && pokemones.map(pokemon => (
            <li key={pokemon.url}>
              <img src={pokemon.url} alt="" />
              {pokemon.name}
            </li>
          ))
        }
      </ul>

      <button onClick={() => dispatch(obtenerPokemonsAction())}>getList</button>
      <button onClick={() => dispatch(siguientePokemonAction(20))}>Next</button>
    </div>
  )
}

export default Pokemons
