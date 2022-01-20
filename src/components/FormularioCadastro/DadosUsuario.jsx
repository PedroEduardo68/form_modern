import { TextField, Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

const DadosUsuario = ({ aoEnviar, validacoes }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({ senha: { valido: true, texto: "" } })

  const ValidarCampos = (event) => {
    const { name, value } = event.target
    const novoEstado = { ...erros }
    novoEstado[name] = validacoes[name](value)
    setErros({ novoEstado })
  }

  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ email, senha });
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
          onBlur={ValidarCampos}
          error={erros.senha.valido}
          helperText={erros.senha.texto}
          onChange={(event) => { setSenha(event.target.value) }}
          variant="outlined"
          fullWidth
          required
          margin='normal' />


        <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
      </form>
    </>
  );
}

export default DadosUsuario;