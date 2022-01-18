import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const DadosPessoasis = ({ aoEnviar, validarCPF }) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");

  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } })



  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault()
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
      }}>
        <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal" value={nome}
          required
          onChange={(event) => {
            setNome(event.target.value)
          }} />

        <TextField id="sobrenome" label="Sobremome" variant="outlined" fullWidth margin="normal"
          required
          value={sobrenome}
          onChange={(event) => {
            setSobrenome(event.target.value)
          }} />

        <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal"
          required
          value={cpf}
          helperText={erros.cpf.texto}
          error={!erros.cpf.valido}
          onBlur={(event) => {
            const ehvalido = validarCPF(event.target.value)
            setErros({ cpf: ehvalido })
          }}
          onChange={(event) => {
            setCpf(event.target.value)
          }} />

        <FormControlLabel
          label="Promoções"
          required
          control={<Switch
            name="promocoes"
            checked={promocoes}
            color="primary"
            onChange={(event) => {
              setPromocoes(event.target.checked)
            }}
          />}
        />


        <FormControlLabel
          label="Novidades"
          required
          control={<Switch
            name="novidades"
            checked={novidades}
            color="primary"
            onChange={(event) => {
              setNovidades(event.target.checked)
            }}
          />}
        />


        <Button type="submit" variant="contained" color="primary">Cadastrar</Button>

      </form>
    </>
  );
}

export default DadosPessoasis;