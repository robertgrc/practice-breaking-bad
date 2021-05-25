import React, { useState } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: --webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {

  //state de Frases

  const [frase, guardarFrase] = useState({});


  //1ra forma larga obtener una frase desde una api
  //   const consultarAPI = () =>{
  //   const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  //   const frase = api.then( respuesta => respuesta.json());
  //   frase.then(resultado => console.log(resultado));
  // }
// 2da forma corta con async y await para obtener la frase desde una api
  const consultarAPI = async () =>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);
  }

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
      onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;