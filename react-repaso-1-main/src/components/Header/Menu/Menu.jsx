import React from 'react'

const Menu = ({children}) => {
    console.log('menu', children);
  return (
      <div>
    {children[4]}
    </div>
  )
}

export default Menu