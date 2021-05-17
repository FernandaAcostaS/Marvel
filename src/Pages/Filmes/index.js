import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from "react-router-dom";

import { Container } from './styles';

import Header from '../../Components/Header';
import Modal from '../../Components/Modal';
import ModalCapita from '../../Components/ModalCapita';
import ModalCapitao from '../../Components/ModalCapitao';
import ModalHomemDeFerro from '../../Components/ModalHomemDeFerro';

import Homem_de_ferro_1 from '../../assets/Homem_de_ferro_1.png';
import Capitao_america from '../../assets/Capitao_america.png';
import Capita_marvel from '../../assets/Capita_marvel.png';
import icon_one from '../../assets/icon_one.png';


function Session1() {

  
  const history = useHistory();
  const [hover, setHover] = useState(false);
  const [mouseOverChild, setMouseOverChild] = useState(false);


  const [modalStatus1, setModalStatus1] = useState(false);
  const [modalData1, setModalData1] = useState({});
  
  const handleProductClick1 = () => {
      setModalData1();
      setModalStatus1(true);
  }

  const [modalStatus2, setModalStatus2] = useState(false);
  const [modalData2, setModalData2] = useState({});
  
  const handleProductClick2 = () => {
      setModalData2();
      setModalStatus2(true);
  }

  const [modalStatus3, setModalStatus3] = useState(false);
  const [modalDat32, setModalData3] = useState({});
  
  const handleProductClick3 = () => {
      setModalData3();
      setModalStatus3(true);
  }

  return (
    

    <Container>

      <Header/>

      <div className="card_one">
        <img src={Homem_de_ferro_1} id="HomemDeFerro1"/>
        <div className='button1'>
          <button  onClick={handleProductClick1}> 
             <span> Ver detalhes </span>
          </button>
        </div>

        <Modal status={modalStatus1} setStatus={setModalStatus1}>     
          <ModalHomemDeFerro/>
        </Modal>
      </div>

      <div className="card_two">
        <img src={Capitao_america} id="CapitaoAmerica"/>
        <div className='button2'>
          <button  onClick={handleProductClick2}> 
             <span> Ver detalhes </span>
          </button>
        </div>

        <Modal status={modalStatus2} setStatus={setModalStatus2}>     
          <ModalCapitao />
        </Modal>
      </div>

      <div className="card_three">
        <img src={Capita_marvel} id="CapitaMarvel"/>
        <div className='button3'>
          <button  onClick={handleProductClick3}> 
             <span> Ver detalhes </span>
          </button>
        </div>

        <Modal status={modalStatus3} setStatus={setModalStatus3}>     
          <ModalCapita />
        </Modal>
      </div>

      <div className="card_four">

      </div>

      <div className="arrow">
        <img src={icon_one} id="icon_one"/>
      </div>

    </Container>

  );
  
}

export default Session1;