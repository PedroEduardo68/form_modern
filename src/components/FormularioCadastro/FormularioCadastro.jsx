import React from 'react';

const FormularioCadastro = () => {
  return (
    <>
      <from>
        <label>Nome</label>
        <input type="text" />

        <label>Sobrenome</label>
        <input type="text" />

        <label>CPF</label>
        <input type="text" />

        <label>Promoções</label>
        <input type="checkbox" />

        <label>Novidades</label>
        <input type="checkbox" />

        <button type="submit">Cadastrar</button>

      </from>
    </>
  );
}

export default FormularioCadastro;