const Input = (props) => {

    const inputHandle = (event) => {
        props.hablarAlPadre(event.target.value);
    }

    return (
        <input
            type="text"
            defaultValue={props.byDefault}
            onChange={inputHandle}
        />
    );
}

export default Input;