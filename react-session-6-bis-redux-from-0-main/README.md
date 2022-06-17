# Instalar REDUX desde Cero

- Instalar todos los paquetes de Redux
```npm
npm i redux react-redux redux-thunk redux-devtools-extension react-router-dom
```
- Crear carpeta llamada `redux` dentro de nuestra carpeta `src`.
- Creamos un archivo llamado `store.js` con el siguiente contenido
```js
import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
```
- Nos vamos al `index.js` vamos a importar `import {Provider} from 'react-redux` y `import store from './redux/store.js'`;
- Añadimos el `<Provider>` al render de manera que quede así en el archivo `index.js`:
```jsx
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```
- Con esto ya tendríamos Redux configurado. Ahora vamos a crear nuestro primer reducer, en este caso un contador.
- Crearemos una nueva carpeta dentro de redux -> `/src/redux/counter` y dos archivos dentro -> `/src/redux/counter/counter.actions.js` y `/src/redux/counter/counter.reducer.js`.
- En el archivo reducer, creamos un estado inicial y un reducer vacío, quedaría así el archivo `/src/redux/counter/counter.reducer.js`
```js
const INITIAL_STATE = {
  count: 0,
}

const counterReducer = (state = INITIAL_STATE, action) => {
  return state;
};

export default counterReducer;
```
- Con el primer reducer creado, iremos a `store.js` a configurarlo para que aparezca en Redux, quedaría así nuestro archivo
```js
import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import counterReducer from "./counter/counter.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
```
- Conectaremos un componente a un valor localizado dentro del estado de redux, en nuestro caso el valor estará en `state.counter.count` y enlazaremos al componente `<CounterView />` que hemos creado en `src/components/CounterView` y renderizado desde `App`. El componente conectado quedaría así:
```jsx
import {connect} from 'react-redux';

const CounterView = (props) => {
  return (
    <>
      <h2>Así está nuestro contador ahora</h2>
      <h2>Contador {props.count}</h2>
    </>
  )
};

const mapStateToProps = (state) => {

  const myObj = {
    count: state.counter.count,
  }

  return myObj;
};

export default connect(mapStateToProps)(CounterView);
```
- Ahora este componente, tiene una nueva prop llamada `count` que le hemos asignado el valor desde el estado de redux (super objeto).
- Bien, ahora tenemos un componente que lee del estado `<CounterView />`, necesitamos hacer cambios en nuestro estado. ¡Vamos a crear una función que sume uno a nuestro contador.
- Vamos al archivo `counter.actions.js` y creamos una acción. Nuestro archivo quedaría así:
```js
const COUNTER_INCREASE = 'COUNTER_INCREASE';

export const incrementarContador = () => dispatch => {
  console.log('Ejecuto incrementar contador');
};
```
- Y en nuestro componente `<CounterButtons />`, nos conectamos a Redux con la función `connect`, y hacemos uso de la prop `props.dispatch` que nos inyecta redux. Con esto, nuestro componente quedaría así:
```jsx
import { connect } from "react-redux";
import { incrementarContador } from "../redux/counter/counter.actions";

const CounterButtons = (props) => {
  return (
    <div>
      <button onClick={() => props.dispatch(incrementarContador())}>Aumentar Contador</button>
      <button>Disminuir Contador</button>
    </div>
  );
};

export default connect()(CounterButtons);
```
- Volvemos a `counter.actions.js` y creamos la acción que queremos 'disparar', quedando así nuestro archivo:
```jsx
const COUNTER_INCREASE = 'COUNTER_INCREASE';

export const incrementarContador = () => dispatch => {
  const incrementAction = {
    type: COUNTER_INCREASE,
  }

  dispatch(incrementAction);
};
```
- Ahora en las redux dev tools podeis ver como se dispara la acción de `COUNTER_INCREASE` pero no hace nada.
- Bien, ahora en el archivo `counter.reducer.js` creamos un switch dentro de la función `counterReducer`. Particularidad de esta función es que SIEMPRE tiene que retornar un nuevo estado, así quedaría nuestro reducer después de haberle añadido el switch y dos propiedades mas:
```jsx
const INITIAL_STATE = {
  count: 288,
  lastCount: null,
  counterName: 'First Redux Counter',
}

const counterReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'COUNTER_INCREASE': {
      const newState = { ...state, count: state.count + 1, lastCount: state.count };
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default counterReducer;
```
- Bien, ahora que hemos incrementado el contador, ¿Cómo hacer una acción que lleve datos adjuntos? Por ejemplo, queremos aumentar el contador pero esta vez no en +1 sino en un número dinámico dado por un input del usuario. Lo primero que tenemos que hacer es crear un componente que nos permita elegir un número con un input.

```jsx
import { useState } from "react";

const CounterIncrementInput = () => {
  const [number, setNumber] = useState(10);

  const incrementClick = () => {
    setNumber(0);
  }

  return (
    <div>
      <input type="number" value={number} onChange={(ev) => setNumber(Number(ev.target.value))} />
      <div>
        <button onClick={incrementClick}>Incrementar en {number} el contador</button>
      </div>
    </div>
  )
}

export default CounterIncrementInput;
```

- Una vez el componente hecho, es hora de crear una acción, conectar el Componente para que la dispare, y por último ampliar el contador. Le añadimos esto al archivo actions
```js
export const COUNTER_ADD_BY_QUANTITY = 'COUNTER_ADD_BY_QUANTITY';

export const incrementByQuantity = (quantity) => dispatch => {
  dispatch({
    type: COUNTER_ADD_BY_QUANTITY,
    payload: quantity,
  })
};
```

- Ahora, en el reducer, añadimos el reducer correspondiente al Switch.
```js
case actions.COUNTER_ADD_BY_QUANTITY: {
  const newState = { ...state, count: state.count + action.payload, lastCount: state.count };
  return newState;
}
```
- Por último, en el componente, importamos la función `incrementByQuantity` y la usamos. Así quedaría el componente
```jsx
import { useState } from "react";
import { connect } from "react-redux";
import { incrementByQuantity } from "../redux/counter/counter.actions";

const CounterIncrementInput = ({dispatch}) => {
  const [number, setNumber] = useState(10);

  const incrementClick = () => {
    dispatch(incrementByQuantity(number));
    setNumber(0);
  }

  return (
    <div>
      <input type="number" value={number} onChange={(ev) => setNumber(Number(ev.target.value))} />
      <div>
        <button onClick={incrementClick}>Incrementar en {number} el contador</button>
      </div>
    </div>
  )
}

export default connect()(CounterIncrementInput);
```

Con esto ya tendríamos nuestra aplicación terminada
