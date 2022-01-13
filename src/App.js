
import {Container} from '@material-ui/core/';
import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

class App extends Component {
  render() {
    return (
      <>
        <Container component="article" maxWidth>
          <h1>Formulario de Cadastro</h1>
          <FormularioCadastro />
        <Container />
      </>
    );
  }
}

export default App;
