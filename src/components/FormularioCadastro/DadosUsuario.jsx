import { TextField, Button } from '@material-ui/core';
import React from 'react';
import { useState, useContext } from 'react';
import useErros from '../../hooks/useErros';
import ValidacoesCadastro from '../context/ValidaçõesCadastro';

const DadosUsuario = ({ aoEnviar }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, ValidarCampos, possoEnviar] = useErros(validacoes);




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