import React, { useContext } from 'react'
import { MyContext } from '../MyContext'

const Menu = () => {

    const { t } = useContext(MyContext)

  return (
    <div>
        <ul>
            <li>{t('init')}</li>
            <li>{t('characters')}</li>
            <li>{t('cities')}</li>
            <li>{t('about')}</li>
        </ul>
    </div>
  )
}

export default Menu