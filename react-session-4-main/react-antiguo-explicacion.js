class Main extends Component {
  constructor() {
    this.state = {
      form: {name: '', lastName: ''},
      pokemons: [],
      isDeveloper: true,
      isReal: true,
    };

    this.fetchPokemons = this.fetchPokemons.bind(this);
  }

  fetchPokemons() {
    this.setState({pokemons: [1,2,3,4]})
  };

  render() {
    const {pokemons, form, isReal} = this.state;

    return (
      <div>
        <p>HTMK</p>
        <div>{pokemons}</div>
        <div>{isReal}</div>
        <PotterForm form={form} />
      </div>
    )
  }
};

/**
 * VENTAJAS DE LOS HOOKS (EN CONCRETO EL DE STATE)
 * LOS HOOKS NOS DAN LA POSIBILIDAD DE TENER ESTADO EN COMPONENTES FUNCIONALES!!!!!!!!!
 * PODEMOS SEPARAR EL ESTADO EN VARIABLES DIFERENTES
 */

const DumbComponent = (props) => {
  const [isReal, setIsReal] = useState(true);
  const [form, setForm] = useState({name: '', lastName: ''});
  return (
    <div>
        <p>HTMK</p>
        <div>{pokemons}</div>
        <div>{isReal}</div>
        <PotterForm form={form} />
      </div>
  )
}