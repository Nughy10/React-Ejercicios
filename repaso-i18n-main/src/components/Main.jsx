import React, { useContext } from 'react'
import { MyContext } from '../MyContext'

const Main = () => {

    const {t} = useContext(MyContext);
  return (
    <div>
        <p>{t('text_about')}</p>
    </div>
  )
}

export default Main