
import {Container, Typography} from '@material-ui/core/';
import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import 'fontsource-roboto'
import {validarCPF, validarSenha} from "./components/models/cadastro"
import ValidacoesCadastro from './components/context/ValidaçõesCadastro';

class App extends Component {
  render() {
    return (
      <>
        <Container component="article" maxWidth="sm">
          <Typography variant="h3" component="h1" align='center'>Formulário de Cadastro</Typography>
          <ValidacoesCadastro.Provider value={{cpf:validarCPF, senha:validarSenha, nome:validarSenha}}>
            <FormularioCadastro aoEnviar={aoEnviarFrom} />
          </ValidacoesCadastro.Provider>

        </Container >
      </>
    );
  }
}

const aoEnviarFrom = (dados) => {
  console.log(dados)
}




export default App;

