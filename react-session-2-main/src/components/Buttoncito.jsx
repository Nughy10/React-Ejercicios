import './Buttoncito.scss';

/**
 * Prop1: text: contendrá el texto del botón
 * prop2: type: valor 'primary' o 'secondary'
 * según que valor venga en la prop type, pondremos
 * una clase y otra al elemento. 
 */


const Buttoncito = (props) => {
    return (
        <button onClick={props.btnClick} className={`buttoncito ${props.type}`}>
            {props.text}
        </button>
    )
};

export default Buttoncito;