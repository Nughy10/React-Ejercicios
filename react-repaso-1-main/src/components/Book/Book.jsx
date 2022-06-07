//1. tengamos un array de objetos libros con nombre y autor
//2. recorremos el array de libros y pintamos un componente Book que reciba nombre y autor por props
//3. recogemos las props y pintamos titulo en un h4 y autor en un p



const Book = (pepe) => {

  return (
      <>
        <h4>{pepe.title}</h4>
        <p>{pepe.author}</p>
      </>
  )
}

export default Book