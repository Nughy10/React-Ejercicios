import { Fragment } from "react";

const CharactersDraw = (props) => {
  console.log('PROPS EN CHARACTERS DRAW', props.characters);

  return (
    <>
      <h1>Characters Draw</h1>
      <div className="characters__cards">
        {props.characters.map((char, index) => {
          console.log(`${index}-${JSON.stringify(char)}`);
          return (
            <div key={`${index}-${JSON.stringify(char)}`}>
              <div></div>
              <div className="character__card">
                <div>Mago: {char.mago}</div>
                <div>Casa: {char.casa}</div>
                <div>Varita {char.varita}</div>
                <div>
                  <img width="250px" src={char.photo} alt={char.mago} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
};

export default CharactersDraw;