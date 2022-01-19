import React from 'react';
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'
import DadosEntrega from './DadosEntrega'
//import { Typography } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';

const FormularioCadastro = ({ aoEnviar, validarCPF }) => {

  useEffect(() => {
    console.log(dadoscoletados);
  })

  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadoscoletados, setDados] = useState({});

  const proximo = () => {
    setEtapaAtual(etapaAtual + 1);
  }

  const coletarDados = (dados) => {
    setDados({ ...dadoscoletados, ...dados })
    console.log(dados)
    proximo();
  }


  const formuario = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={aoEnviar} />,
  ]


  {/*
  const formuarioAtual = (etapa) => {



   
    switch (etapa) {
      case 0:
        return <DadosUsuario aoEnviar={proximo} />;
      case 1:
        return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />;
      case 2:
        return <DadosEntrega aoEnviar={aoEnviar} />;
      default:
        return <Typography>Erro ao selecionar formulario</Typography>;
    }
   
  }
  */}

  return (
    <>
      {formuario[etapaAtual]}
    </>
  );
}


export default FormularioCadastro;