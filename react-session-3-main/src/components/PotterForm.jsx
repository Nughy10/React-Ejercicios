import { useState } from "react";

/**
 * 1. Crear una variable de estado con cada campo de nuestro formulario [form, setForm]
 * 2. A cada input, le asignaremos un atributo value={form.name}
 *
 * formfields = {
 *    nombre: '',
 *    casa: '',
 * }
 */

const INITIAL_STATE = {
  mago: "",
  casa: "",
  varita: "",
  photo: "",
};

const PotterForm = (props) => {
  const [formFields, setFormFields] = useState(INITIAL_STATE);

  const submitCharacter = (event) => {
    event.preventDefault();

    if (formFields !== INITIAL_STATE) {
      props.getCharacter(formFields);
    }
    setFormFields(INITIAL_STATE);
  }

  const handleInput = (event) => {
    const {name, value} = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <form onSubmit={submitCharacter}>
      <p>Potter Nombre</p>
      <input type="text" name="mago" value={formFields.mago} onChange={handleInput} />
      <p>Casa</p>
      <input type="text" name="casa" value={formFields.casa} onChange={handleInput} />
      <p>Varita</p>
      <input type="text" name="varita" value={formFields.varita} onChange={handleInput} />
      <p>Foto</p>
      <input type="text" name="photo" value={formFields.photo} onChange={handleInput} />
      {formFields.photo ? <div><img width="250px" src={formFields.photo} alt="character profile" /></div> : <p>No tengo foto</p>}
      <div>
        <button type="submit">Enviar Personaje</button>
      </div>
    </form>
  );
};

export default PotterForm;
