import './Footer.scss';

const Footer = ({pepe, children}) => {
    
  return (
      <>
        <footer>{children}</footer>
        <button onClick={pepe}>Digo Hola</button>
      </>
  )
}

export default Footer