import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ValidacoesCadastro from '../context/ValidaçõesCadastro';


const DadosPessoasis = ({ aoEnviar }) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");

  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" }, nome: { valido: true, texto: "" } });

  const validacoes = useContext(ValidacoesCadastro)

  const possoEnviar = () => {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
      return true;
    }

  }

  function validarCampos(event) {

    console.log(validacoes["cpf"](1234))


    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault()
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
        }

      }}>
        <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal" value={nome}
          required
          onBlur={(event) => validarCampos(event)}
          error={!erros.nome.valido}
          helperText={erros.nome.texto}
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
          onBlur={validarCampos}
          error={!erros.cpf.valido}
          helperText={erros.cpf.texto}
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


        <Button type="submit" variant="contained" color="primary">Proximo</Button>

      </form>
    </>
  );
}

export default DadosPessoasis;