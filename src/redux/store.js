import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import pokeReducer from "./pokeDucks";

// Tienda de stores a poner disponible para el stado global de
// {<nombre de la tienda>: reducerTienda}
const rootReducer = combineReducers({
  pokemons: pokeReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(logger, thunk)
    )
  );

}

