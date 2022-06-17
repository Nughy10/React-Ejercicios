import './App.scss';
import {Routes, Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import People from './pages/People';
import Navbar from './components/Navbar';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <Router>
    <Navbar/>
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='people' element={<People />} />
        <Route path='/movies/:id' element={<MovieDetail />} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;
