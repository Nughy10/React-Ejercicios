import { connect } from "react-redux"
import { setSexyUsername } from "../redux/actions/auth.actions"

const Home = ({ usuario, dispatch }) => {
  return (
    <>
      <h1>Home de {usuario && usuario.name}</h1>
      <button onClick={() => {dispatch(setSexyUsername('Fernando'))}}>Cambiar nombre de usuario</button>
    </>
  )
}

export default connect(
  (state) => ({
    usuario: state.auth.user
  })
)(Home);