import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.scss";

const MyTitle = () => {
  return (
    <h1>Este es mi primer componente de React</h1>
  );
}

function App() {
  return (
    <div className="app">
        <Header />
        <MyTitle />
        <Footer />
    </div>
  );
}

export default App;
