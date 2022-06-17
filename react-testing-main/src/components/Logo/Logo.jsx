import { useState } from "react";

const Logo = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <h1 data-testid="title">¡Estamos aprendiendo testing!</h1>
      <h2>{props.subtitle}</h2>
      {visible && <div>Estoy visible</div>}
      <button data-testid="button" onClick={() => setVisible(!visible)}>Toggle Visibility</button>
    </>
  );
};

export default Logo;