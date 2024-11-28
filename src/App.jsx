import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <NavBar bg="dark" theme="dark" />
      <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
    </>
  )
}

export default App