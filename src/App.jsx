import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListcontainer';

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={'GAME, SET, MATCH.'} />
    </div>
  )
}

export default App;