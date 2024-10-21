import img from './img/rick-morty.png'
import './App.css';
import { useState } from 'react';
import Characters from './components/characters';

function App() {

  //Intengrar la api en nuestra pagina, 
const [characters, setCharacters] = useState(null);
//este const es para que pueda buscar al hacer click en el buton 
const reqApi =async () => {
  // el fecth es donde estamos cogiendo los datos de los personajes 
  const api = await fetch('https://rickandmortyapi.com/api/character');
  const characterApi = await api.json();
  
  setCharacters(characterApi.results)
};

  return (
    <div className="App">
      <header className="App-header">
       <h1 className='title'>Ricky & Morty</h1>
       {characters ? (
         <Characters characters ={characters} setCharacters={setCharacters}  />
       ):(
       <>
       <img src={img} alt="ricky&morty" className="img-home"/>
       <button onClick={reqApi} className='btn-search'>Buscar Personajes </button>
       
       </>
       )}
       
       
      </header>
    </div>
  );
}

export default App;
