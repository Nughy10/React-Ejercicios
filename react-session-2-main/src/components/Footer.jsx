import {useState} from 'react';

/**
 * Crea un h1 cuyo contenido sea el texto que se escriba en un input.
 * 
 * Que el estado, no sea un objeto, sino una string!!! 
 */

const Footer = (props) => {
    const [state, setState] = useState({ footerText: 'Estado inicial del footerText' });

    const inputHandle = (event) => {
        setState({ footerText: event.target.value });
    };

    return (
        <footer>
            <h1>{props.title}</h1>
            <h1>{state.footerText}</h1>
            <input type="text" onChange={inputHandle} />
        </footer>
    );
};

export default Footer;