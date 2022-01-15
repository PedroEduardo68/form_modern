import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const FormularioCadastro = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");

  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);



  return (
    <>
      <from onSubmit={(event) => {
        event.preventDefault()
      }}>
        <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal" value={nome}
          onChange={(event) => {
            setNome(event.target.value)
          }} />

        <TextField id="sobrenome" label="Sobremome" variant="outlined" fullWidth margin="normal"
          value={sobrenome}
          onChange={(event) => {
            setSobrenome(event.target.value)
          }} />

        <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal"
          value={cpf}
          onChange={(event) => {
            setCpf(event.target.value)
          }} />

        <FormControlLabel
          label="Promoções"
          control={<Switch
            name="promocoes"
            defaultChecked={promocoes}
            color="primary"
            onChange={(event) => {
              setPromocoes(event.target.checked)
            }}
          />}
        />


        <FormControlLabel
          label="Novidades"
          control={<Switch
            name="novidades"
            defaultChecked={novidades}
            color="primary"
            onChange={(event) => {
              setNovidades(event.target.checked)
            }}
          />}
        />


        <Button type="submit" variant="contained" color="primary">Cadastrar</Button>

      </from>
    </>
  );
}

export default FormularioCadastro;