import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { MyContext } from './MyContext';

function App() {
  const {t, i18n} = useTranslation(['translation']); //importamos t(traducciones) y i18n de useTranslation

  //creamos una función para cambiar el idioma
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  }

  return (
    <MyContext.Provider value={{t, changeLanguage}}>      {/*Pasamos las traducciones y la funcion para setear el idioma al contexto */}
    <div className="App">
      <Navbar />
      <Menu />
      <Main />
      <Footer />
    </div>
    </MyContext.Provider>
  );
}

export default App;
