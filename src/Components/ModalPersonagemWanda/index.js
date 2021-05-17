import React, { useState, useEffect, useRef } from 'react';


import Wanda_detalhes from '../../assets/Wanda_detalhes.png';
import Thanos_detalhes from '../../assets/Thanos_detalhes.png';




import { Container, } from './styles';

export default ({  }) => {


    return (

        <Container >

            <div className="cardwanda">

                <img src={Wanda_detalhes} id="Wanda_detalhes"/>

            </div>


        </Container>

    );
}