import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

const FormularioCadastro = () => {
  return (
    <>
      <from>
        <TextField id="nome" label="Nome" variant="outlined" fullWidth />

        <TextField id="sobrenome" label="Sobremome" variant="outlined" fullWidth />

        <TextField id="cpf" label="CPF" variant="outlined" fullWidth />

        <label>Promoções</label>
        <input type="checkbox" />

        <label>Novidades</label>
        <input type="checkbox" />

        <Button type="submit" variant="contained" color="primary">Cadastrar</Button>

      </from>
    </>
  );
}

export default FormularioCadastro;