import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const DadosPessoasis = ({ aoEnviar, validacoes }) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");

  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } })

  const ValidarCampos = (event) => {

    const { name, value } = event.target
    const novoEstado = { ...erros }
    novoEstado[name] = validacoes[name](value);
    console.log(novoEstado)
    setErros({ novoEstado })
  }

  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault()
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
      }}>
        <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal" value={nome}
          required
          name="nome"
          onChange={(event) => {
            setNome(event.target.value)
          }} />

        <TextField id="sobrenome" label="Sobremome" variant="outlined" fullWidth margin="normal"
          required
          name="sobrenome"
          value={sobrenome}
          onChange={(event) => {
            setSobrenome(event.target.value)
          }} />

        <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal"
          required
          value={cpf}
          helperText={erros.cpf.texto}
          error={!erros.cpf.valido}
          onBlur={ValidarCampos}
          name="cpf"

          onChange={(event) => {
            setCpf(event.target.value)
          }}
        />

        <FormControlLabel
          label="Promoções"
          name="promocoes"
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
          name="novidades"
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