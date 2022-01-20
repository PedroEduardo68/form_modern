
import {Container, Typography} from '@material-ui/core/';
import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import 'fontsource-roboto'
import {validarCPF, validarSenha} from "./components/models/cadastro"

class App extends Component {
  render() {
    return (
      <>
        <Container component="article" maxWidth="sm">
          <Typography variant="h3" component="h1" align='center'>Formulário de Cadastro</Typography>
          <FormularioCadastro aoEnviar={aoEnviarFrom} validadcoes={{cpf:validarCPF, senha:validarSenha, nome:validarSenha}} />
        </Container >
      </>
    );
  }
}

const aoEnviarFrom = (dados) => {
  console.log(dados)
}




export default App;
