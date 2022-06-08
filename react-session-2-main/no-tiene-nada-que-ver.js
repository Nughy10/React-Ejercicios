const getAlumno = () => {
    const alumno = {
        name: 'Gloria',
        lastName: 'Vega',
    };

    return alumno;
}


const {name, lastName} = getAlumno();

// console.log('Name ->', name);
// console.log('Last Name ->', lastName);

const useState = (initial) => {
    const listado = [initial, () => console.log('función ejecutada')];

    return listado;
}

const [state, setState] = useState(10);

console.log(state);
console.log(setState());