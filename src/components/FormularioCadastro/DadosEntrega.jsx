import React from "react";
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const DadosEntrega = () => {
  return (
    <>
      <form>
        <TextField id="cep" label="CEP" type="number"
          variant="outlined"
          required
          margin='normal'
        />


        <TextField id="endereço" label="Endereço" type="text"
          variant="outlined"
          fullWidth
          required
          margin='normal'
        />


        <TextField id="numero" label="Numero" type="number"
          variant="outlined"
          required
          margin='normal'
        />

        <TextField id="estado" label="Estado" type="text"
          variant="outlined"
          required
          margin='normal'
        />


        <TextField id="cidade" label="cidade" type="text"
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