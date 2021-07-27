import axios from "axios";

// 3.- constantes
const initialData = {
  array: [],
  offset: 0
}

// Types
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO';
const NEXT_PAGINATE_LIST_POKEMONS = 'NEXT_PAGINATE_LIST_POKEMONES';

// 2.- reducers
export default function pokeReducer(state = initialData, action) { // <-- el sate que va al store

  switch (action.type) {
    case OBTENER_POKEMONES_EXITO:
      return {
        ...state,
        array: action.payload
      }

    case NEXT_PAGINATE_LIST_POKEMONS:
      return {
        ...state,
        array: action.payload.array,
        offset: action.payload.offset
      }

    default:
      return state
  }
}

// 1.- acciones
export const obtenerPokemonsAction = () => async (dispatch, setState) => {
  try {

    const { offset } = setState().pokemons

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);

    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: res.data.results
    });

  } catch (error) {
    console.error(error);
  }
}

export const siguientePokemonAction = (increment) => async (dispatch, setState) => {
  try {

    const { offset } = setState().pokemons
    const siguiente = offset + increment;

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`);

    dispatch({
      type: NEXT_PAGINATE_LIST_POKEMONS,
      payload: {
        array: res.data.results,
        offset: siguiente
      }
    });

  } catch (error) {
    console.error(error);
  }
}
