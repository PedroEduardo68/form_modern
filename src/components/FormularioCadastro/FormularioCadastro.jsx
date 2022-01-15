import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const FormularioCadastro = () => {
  return (
    <>
      <from>
        <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal" />

        <TextField id="sobrenome" label="Sobremome" variant="outlined" fullWidth margin="normal" />

        <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal" />

        <FormControlLabel
          label="Promoções"
          control={<Switch
            name="promocoes"
            defaultChecked
            color="primary"
          />}
        />


        <FormControlLabel
          label="Novidades"
          control={<Switch
            name="novidades"
            defaultChecked
            color="primary"
          />}
        />


        <Button type="submit" variant="contained" color="primary">Cadastrar</Button>

      </from>
    </>
  );
}

export default FormularioCadastro;