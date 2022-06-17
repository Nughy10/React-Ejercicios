const users = [
  {email: 'profesor@upgrade.com', password: 'pepe', name: 'Profesor'},
  {email: 'alumno@upgrade.com', password: 'lola', name: 'Alumno'},
  {email: 'user@upgrade.com', password: 'demo', name: 'Usuario'},
];

export const authenticateUser = userForm => {
  // Tiene que comparar el user que recibe, si existe en el array users.
  // Si existe -> devuelve el user
  // Si no existe -> devuelve false

  // Esto simula un fetch a Node: /auth/login
  const result = users.find(user => user.email === userForm.email && user.password === userForm.password);
  
  if(result) {
    return result;
  }

  return false;
};