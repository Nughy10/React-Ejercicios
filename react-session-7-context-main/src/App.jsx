import useCopy from './hooks/useCopy';
import useLocalStorage from './hooks/useLocalStorage';
import useSexyFernando from './hooks/sexyFernando';
import './App.scss';

function App() {
  const [getClipboard, copyClipboard] = useCopy();
  const storage = useLocalStorage();
  const [fernando, setSexyFernando] = useSexyFernando(50);
  
  getClipboard().then(res => console.log('Valor de clipboard: ',res));

  return (
    <div className="app">
      <h1  onClick={() => copyClipboard('Sexy JS síncrono')}>Hooks Customizados</h1>

      <button onClick={() => console.log(storage.get('preposiciones'))}>
        Obtener preposiciones
      </button>

      <button
        onClick={() => storage.set('preposiciones', ['a', 'ante', 'bajo', 'cabe', 'con'])}
      >
        Grabar array preposiciones en storage
      </button>

      <button onClick={() => storage.remove('preposiciones')}>Borrar Preposiciones</button>

      <h1>Fernando es {fernando} sexy</h1>

      <button onClick={() => setSexyFernando(20)}>
        Hacer que fernando sea menos sexy
      </button>
    </div>
  );
}

export default App;
