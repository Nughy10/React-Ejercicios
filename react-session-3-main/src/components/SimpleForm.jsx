// para poder ejecutar a getCharacter, hay que recibir las props
const CharacterForm = (props) => {

  const submitCharacterForm = (event) => {
    event.preventDefault(); // poner siempre en un evento submit
    
    const data = {
      house: event.target.elements.house.value,
      nombre: event.target.elements.nombre.value,
    };

    // invocamos la función recibida props.getCharacter
    // al estar DEFINIDA en el padre, el resultado cuando la invoquemos
    // lo veremos en el lugar donde está definida.
    props.getCharacter(data);
    event.target.reset();
  };

  return (
    <form onSubmit={submitCharacterForm}>
      <p>Nombre del mago</p>
      <input type="text" name="nombre" />

      <p>Casa de Howarts</p>
      <input type="text" name="house" />

      <button type="submit">Enviar Personaje</button>
    </form>
  );
};

export default CharacterForm;