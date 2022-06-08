import Header from './components/Header';
import Buttoncito from './components/Buttoncito';
import Footer from './components/Footer';
import Counter from './components/Counter';
import './App.scss';

/**
 * Crea un h1 cuyo contenido sea el texto que se escriba en un input.
 * 
 * Que el estado, no sea un objeto!!! 
 */

function App() {

  const button1Click = () => console.log('Botón 1 click');

  const button2Click = () => console.log('Botón 2 click');

  return (
    <div className="app">
      <Header subtitle={'La reutilización en React mola'} />
      <Header subtitle={'Somos upgraders, infalibles'} />
      <p>Hola! Soy la web de React</p>
      
      <Buttoncito
        text='Texto del botón'
        type="primary"
        btnClick={button1Click}
      />

      <Buttoncito
        text='Botón de Fran'
        type="secondary"
        btnClick={button2Click}
      />

      <Footer title="Soy programador: asdkjhasoi dcajskdjiqoweh dioaskdj" />

      <Counter valorInicial={5} />
      <Counter valorInicial={100} />
      <Counter valorInicial={288} />
    </div>
  );
}

export default App;
