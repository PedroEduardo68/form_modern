import { TextField, Button } from '@material-ui/core';
import React from 'react';

const DadosUsuario = (aoEnviar) => {
  return (
    <>
      <from onSubmit={(event) => {
        event.preventDefault();
        aoEnviar();
      }}>
        <TextField id="email" label="E-mail" type="e-mail"
          variant="outlined"
          fullWidth
          margin='normal'
          required
        />
        <TextField id="senha" label="Senha" type="password"
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