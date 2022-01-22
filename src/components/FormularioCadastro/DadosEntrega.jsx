import React from "react";
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { useState, } from "react";


const DadosEntrega = ({ aoEnviar }) => {
  const [cep, setCep] = useState("")
  const [endereco, setEndereco] = useState("")
  const [numero, setNumero] = useState("")
  const [estado, setEstado] = useState("")
  const [cidade, setCidade] = useState("")


  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade })
      }}>
        <TextField id="cep" label="CEP" type="number"
          value={cep}
          onChange={(event) => { setCep(event.target.value) }}
          variant="outlined"
          required
          margin='normal'
        />


        <TextField id="endereço" label="Endereço" type="text"
          value={endereco}
          onChange={(event) => { setEndereco(event.target.value) }}
          variant="outlined"
          fullWidth
          required
          margin='normal'
        />


        <TextField id="numero" label="Numero" type="number"
          value={numero}
          onChange={(event) => { setNumero(event.target.value) }}
          variant="outlined"
          required
          margin='normal'
        />

        <TextField id="estado" label="Estado" type="text"
          value={estado}
          onChange={(event) => { setEstado(event.target.value) }}
          variant="outlined"
          required
          margin='normal'
        />


        <TextField id="cidade" label="cidade" type="text"
          value={cidade}
          onChange={(event) => { setCidade(event.target.value) }}
          variant="outlined"
          required
          margin='normal'
        />

        <Button type="submit" variant="contained" fullWidth color="primary">Finalizar Cadastro</Button>


      </form>

    </>
  );

}

export default DadosEntrega;