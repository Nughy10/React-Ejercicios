import React, { useContext } from 'react'
import { MyContext } from '../MyContext'

const Navbar = () => {
    const {t , changeLanguage} = useContext(MyContext);     // Recogemos los datos del contexto

  return (
    <nav>
    <button onClick={() => {changeLanguage('es')}} >{t('lang_es')}</button>     {/** utilizamos el atributo de idioma que necesitemos */}
    <button onClick={() => {changeLanguage('en')}} >{t('lang_en')}</button>
    <button onClick={() => {changeLanguage('fr')}} >{t('lang_fr')}</button>
  </nav>
  )
}

export default Navbar