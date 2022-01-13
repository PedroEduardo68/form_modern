import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

const FormularioCadastro = () => {
  return (
    <>
      <from>
        <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal" />

        <TextField id="sobrenome" label="Sobremome" variant="outlined" fullWidth margin="normal" />

        <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal" />

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