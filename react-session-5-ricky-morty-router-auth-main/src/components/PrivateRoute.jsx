/**
 * Este componente recibe otro componente (el que queremos privatizar).
 * 
 * si no hay usuario = redirige a Login
 * 
 * si hay usuario, le deja acceder al componente.
 * 
 * PrivateRoute recibirá una prop component={<ComponentePrivado />}
 * Si hay usuario, retorna <ComponentePrivado />
 * Y sino, hace Redirect a /login
 */

import { Navigate } from "react-router-dom";

const PrivateRoute = ({user, component}) => {
  if (user) return component;
  if (!user) return <Navigate to="/login" />
}

export default PrivateRoute;