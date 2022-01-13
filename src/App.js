
import { Component, Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

class App extends Component {
  render(){
    return (
      <>
        <h1>Formulario de Cadastro</h1>
        <FormularioCadastro />
      </>
    );
  }
}

export default App;
