import { TextField, Button } from '@material-ui/core';
import React from 'react';
import { useState, useContext } from 'react';
import ValidacoesCadastro from '../context/ValidaçõesCadastro';

const DadosUsuario = ({ aoEnviar }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({ senha: { valido: true, texto: "" } })


  const validacoes = useContext(ValidacoesCadastro)

  const ValidarCampos = (event) => {
    const { name, value } = event.target
    const novoEstado = { ...erros }
    novoEstado[name] = validacoes[name](value)
    setErros({ novoEstado })
  }

  const possoEnviar = () => {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
      return true;
    }

  }


  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }} >
        <TextField id="email" label="E-mail" type="email"
          name='email'
          value={email}
          onChange={(event) => { setEmail(event.target.value) }}
          variant="outlined"
          fullWidth
          margin='normal'
          required
        />
        <TextField id="senha" label="Senha" type="password"
          name='senha'
          value={senha}
          onBlur={(event) => ValidarCampos(event)}
          error={!erros.senha.valido}
          helperText={erros.senha.texto}
          onChange={(event) => { setSenha(event.target.value) }}
          variant="outlined"
          fullWidth
          required
          margin='normal' />


        <Button type="submit" variant="contained" color="primary">Proximo</Button>
      </form>
    </>
  );
}

export default DadosUsuario;