import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from "react-router-dom";


import { Container } from './styles';

import Header from '../../Components/Header';
import Modal from '../../Components/Modal';
import ModalThorHQ from '../../Components/ModalThorHQ';

import Thor_hq from '../../assets/Thor_hq.png';
import Wolverine_hq from '../../assets/Wolverine_hq.png';
import Surfista_hq from '../../assets/Surfista_hq.png';
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

  return (
    

    <Container>

      <Header/>

      <div className="card_one">
        <img src={Thor_hq} id="Thor_hq"/>
        <div className='button1'>
          <button  onClick={handleProductClick1}> 
             <span> Ver detalhes </span>
          </button>
        </div>

        <Modal status={modalStatus1} setStatus={setModalStatus1}>     
          <ModalThorHQ />
        </Modal>
      </div>

      <div className="card_two">
        <img src={Wolverine_hq} id="Wolverine_hq"/>
      </div>

      <div className="card_three">
        <img src={Surfista_hq} id="Surfista_hq"/>
      </div>

      <div className="arrow">
        <img src={icon_one} id="icon_one"/>
      </div>

    </Container>

  );
  
}

export default Session1;