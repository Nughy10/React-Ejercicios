import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth.reducer';

/**
 * setUser -> es una función que exporto para usar en cualquier componente y que esta función
 * dispara una acción.
 * 
 * Una acción es un objeto con 2 propiedades: type y payload.
 *    type: es lo que se modificará, si creo un type SET_USER lo mas lógico es que guarde un usuario.
 *        NOTA: una acción no siempre tiene que modificar el estado, puede ser informativa.
 *    payload: Si necesito enviar datos para la modificación, lo mando dentro de payload.
 * 
 * Un reducer contiene la forma de modificar el estado. ¿Cómo lo hacemos? Generando un nuevo estado.
 */

const rootReducer = combineReducers({
  auth: authReducer,
  characters: authReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // redux y redux-thunk

export default store;