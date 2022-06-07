import './App.scss';
import Book from './components/Book/Book';
import Contador from './components/Contador/Contador';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import List from './components/List/List';
import MovieContainer from './components/Movies/MovieContainer';

function App() {
  
  let name = 'pepe';
  let surname = 'perez';

  let myArray = ["pera", "naranja", "melon"];

  let myArray2 = [32, 43, 12, 123];

  const books = [
    {
      title: 'El guardian entre el centeno',
      author: 'J.D Sallinger'
    },{
      title: 'El señor de los anillos',
      author: 'Tolkien'
    },{
      title: 'Guerra y paz',
      author: 'Tolstoi'
    },{
      title: 'El jugador',
      author: 'Dostoyevski'
    },{
      title: 'El extranjero',
      author: 'Camus'
    }
  ]

  const sayHello = () => {
    console.log("hellooooo");
  }

  return (
    <div className="app">
        <Contador />
        {/* <MovieContainer />
        <Header name={name} surname={surname}/>
        <List myArray={myArray2}/>
        {books.length > 0 && books.map((book) => {
          return <Book {...book}/>
        })}
        <Footer pepe={sayHello}>
          <List myArray={myArray}/>
        </Footer> */}
    </div>
  );
}

export default App;
