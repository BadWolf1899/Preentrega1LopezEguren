import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div className='Home'>
      <NavBar />
      <ItemListContainer greeting={'Hola'} />
    </div>
  )
}

export default App;