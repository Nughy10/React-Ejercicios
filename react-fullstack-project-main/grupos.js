const alumnos = [
  'Alejandro Rodríguez',
  'Carlos de la Cruz', 
  'Sexy Fernando',
  'Mar Andres',
  'Pau',
  'Paula',
  'Victor',
];

const getRandomList = arr => {
  const randomized = alumnos
    .map(al => ({ name: al, random: Math.random() }))
    .sort((a, b) => a.random - b.random)
    .map(el => el.name)

    return randomized;
}

const makeGroups = (groupSize, list) => {
  /**
   * Recibimos un array de elementos y un tamaño de grupos.
   * Tenemos que obtener cuantos grupos podemos hacer y cuantas personas se quedan sueltas.
   */

  const groups = list.reduce((accumulator, current, index) => {

    if(!accumulator.length) { // Aquí mete al elemento
      accumulator.push([current]);
      return accumulator;
    }
    
    if(accumulator[accumulator.length - 1].length === groupSize) { // Continua y lo mete otra vez (algunos)
      accumulator.push([current]);
      return accumulator;
    }
    
    if(accumulator[accumulator.length - 1].length < groupSize) {
      accumulator[accumulator.length - 1].push(current);
      return accumulator;
    }
    
    return accumulator;
  }, [])  

  console.log('reduce groups', groups);
}

makeGroups(4, getRandomList(alumnos));

const projectGroups = [
  [ 'Victor', 'Paula', 'Pau', 'Sexy Fernando' ],
  [ 'Mireia', 'Gloria', 'Luis', 'Fran' ],
  [ 'Alejandro Rodríguez', 'Mar Andres', 'Carlos de la Cruz' ],
];

/**
 * 1. Elegir el tema que os de la gana
 *    Requisitos
 *      Front: React: Router con rutas privadas, Redux o Contexto para toda la app, buena calidad de código
 *             
 *      Back: Node: Mínimo 4 modelos y que 2 de ellos estén relacionados. 2 CRUD mínimo, autenticación.
 *      
 * 
 * 2. Antes de programar, ¡Piensa! Es decir, plasmad vuestra idea en papel o en alguna app de prototipado.
 *    Definir: Modelos, rutas back, rutas front, páginas y que componentes llevan y que funcionalidad hace cada uno.
 * 
 * 3. Crear proyectos. 1 repo para back, otro repo diferente para Front. sexy-ecommerce-back y sexy-ecommerce-front
 * 
 * 4. Montar las bases, node y react.
 * 
 * 5. Repartir tareas. Ejemplo: A pepito le encanta el front y se le da genial, pues pepito hace casi
 *                     todo el front y nada de back ---> MAAAAAAAAAL
 * 
 *                     Correcto: Intentad que todos hagáis lo mismo de back que de front. Repartir por funcionalidades
 *                     - Pepito: Se encarga del carrito en front y en back. 7
 *                     - Lolita: Se encarga de los productos en front y en back 9
 * 
 * 6. Exponed el codigo delante de vuestros compañeros.
 */

/**
 * Ecommerce
 * 
 * Back: Producto, Carrito, Usuario, Categorias
 * 
 * Productos: 
 * - name
 * - stock
 * - precio
 * 
 * 
 * // React Checkout
 * - Producto -> Cantidad que se pueda modificar
 * - Total de precio
 * - Total de elementos
 * - Botón Pagar
 * 
 * MVP = Mínimo Producto Viable
 * 
 * 
 * Panel de administracion
 *    - poder crear productos
 *    - poder 
 * Mostrar productos y hacer un popup con cada producto en una animación
 * Carrito de la compra
 * Login / Logout
 * Sistema de Ofertas
 * Apartado de mi cuenta
 *    - Cambiar contraseña
 *    - Añadir dirección
 * Chat de soporte -> 12 de Julio, último dia de proyecto.
 *    - implementado en Websockets tiempo real
 * 
 * Home
 * Productos
 * Autenticación
 */