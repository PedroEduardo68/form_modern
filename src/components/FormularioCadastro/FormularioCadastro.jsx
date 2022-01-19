import React from 'react';
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'
import DadosEntrega from './DadosEntrega'
//import { Typography } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { Stepper, Step, StepLabel, Typography } from '@material-ui/core';

const FormularioCadastro = ({ aoEnviar, validacoes }) => {

  useEffect(() => {
    if (etapaAtual == formuario.length - 1) {
      console.log(dadoscoletados);
    }
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
    <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes} />,
    <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
    <DadosEntrega aoEnviar={aoEnviar} validacoes={validacoes} />,
    <Typography variant='h5' > Obrigado pelo Cadastro </Typography>
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
      <Stepper activeStep={etapaAtual} >
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formuario[etapaAtual]}
    </>
  );
}


export default FormularioCadastro;