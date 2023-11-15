import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Matheus'
  
  function sum (a,b) {
    return a + b 
  }

  const url = 'https://via.placeholder.com/150'
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {name}</p>
      <p>Soma:{sum(1,2)}</p>
      <img src={url} alt='Minhas Imagens'/>
    </div>
  );
}

export default App;
