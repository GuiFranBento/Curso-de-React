import logo from './logo.svg';
import './App.css';
import SayMyName from './Componentes/SayMyName';
import Pessoa from './Componentes/Pessoa';
import Frase from './Componentes/Frase';


function App() {
  
  
  const url = 'https://via.placeholder.com/150'
  return (
    <div className="App">
      <Frase/>
      <h2>Alterando o JSX/Componentes</h2>
      <SayMyName nome="Matheus"/>
      <SayMyName nome= "João"/>
      <img src={url} alt='Minhas Imagens'/>
      <Pessoa nome="Rodrigo" idade="28" profissao="Programador" foto="https://via.placeholder.com/150"/>

    </div>
  );
}

export default App;
