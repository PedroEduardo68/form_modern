import { TextField, Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

const DadosUsuario = (aoEnviar) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <>
      <from onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ email, senha });
      }}>
        <TextField id="email" label="E-mail" type="email"
          value={email}
          onChange={(event) => { setEmail(event.target.value) }}
          variant="outlined"
          fullWidth
          margin='normal'
          required
        />
        <TextField id="senha" label="Senha" type="password"
          value={senha}
          onChange={(event) => { setSenha(event.target.value) }}
          variant="outlined"
          fullWidth
          required
          margin='normal' />


        <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
      </from>
    </>
  );
}

export default DadosUsuario;