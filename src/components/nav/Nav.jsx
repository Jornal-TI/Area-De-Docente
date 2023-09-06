import React, { useState } from 'react';
import './nav.css';
import styled from 'styled-components';
import Lapis from '../../icons/lapis.png'
import Clock from '../../icons/relogio.png';
import Book from '../../icons/livro.png';
import Notebook from '../../icons/caderno.png';
import Login from '../../icons/login.png';
import Certo from '../../icons/certo.png';
import CardButom from "../../Card/CardButom";
import DadosButom from '../../MeusDados/dados';
import Cronograma from '../../Calendario/CronogramasInfo.jsx';
import MaterialApoio from '../../MaterialDeApoio/MaterialDeApoio.jsx';

function mensagem() {
  alert('hello')

}



function Nav() {
  const [showCard, setShowCard] = useState(false);
  const [showDados, setShowDados] = useState(false);
  const [showCronograma, setShowCronograma] = useState(false);
  const [showMaterialApoio, setShowMaterialApoio] = useState(false);

  const handleCardClick = () => {
    setShowCard(!showCard);

    showDados?  setShowDados(!showDados): setShowDados(showDados);
    showCronograma?  setShowCronograma(!showCronograma): setShowCronograma(showCronograma);
    showMaterialApoio?  setShowMaterialApoio(!showMaterialApoio): setShowMaterialApoio(showMaterialApoio);

  };

  const handleDadosClick = () => {
    setShowDados(!showDados);

    showCard?  setShowCard(!showCard): setShowCard(showCard);
    showCronograma?  setShowCronograma(!showCronograma): setShowCronograma(showCronograma);
    showMaterialApoio?  setShowMaterialApoio(!showMaterialApoio): setShowMaterialApoio(showMaterialApoio);



  };

  const handlerCronogramaClick = () => {
    setShowCronograma(!showCronograma);

    showCard?  setShowCard(!showCard): setShowCard(showCard);
    showDados?  setShowDados(!showDados): setShowDados(showDados);
    showMaterialApoio?  setShowMaterialApoio(!showMaterialApoio): setShowMaterialApoio(showMaterialApoio);


  };
  

  const handlerMaterialClick = () => {
    setShowMaterialApoio(!showMaterialApoio);

    showCard?  setShowCard(!showCard): setShowCard(showCard);
    showDados?  setShowDados(!showDados): setShowDados(showDados);
    showCronograma?  setShowCronograma(!showCronograma): setShowCronograma(showCronograma);


  };


  return (
    <div id='est'>
      <div className="navbar-menu">
        <button onClick={handleCardClick}><img src={Lapis}></img>Notas e Atividades</button>
        <button onClick={handlerCronogramaClick}><img src={Clock}></img>Cronograma</button>
        <button onClick={handlerMaterialClick}><img src={Notebook}></img>Material de Apoio</button>
        <button onClick={handleDadosClick}><img src={Login}></img>Meus Dados</button>
        <button onClick={mensagem}><img src={Certo}></img>Lançamento de Notas</button>
      </div>

      {
        showCard && (

          <div >
            <CardButom />
          </div>
        )



      }

      {
        showDados && (

          <div className='dados'>
            <DadosButom />
          </div>
        )



      }

      {
        showCronograma && (

          <div className='dados'>
            <Cronograma />
          </div>
        )



      }

      {
        showMaterialApoio && (

          <div className='material'>
            <MaterialApoio />
          </div>
        )



      }
    </div>
  )

} export default Nav;


