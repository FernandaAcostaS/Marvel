import React, { useState, useEffect, useRef } from 'react';


import Thanos_detalhes from '../../assets/Thanos_detalhes.png';




import { Container, } from './styles';

export default ({  }) => {


    return (

        <Container >

            <div className="cardthanos">

                <img src={Thanos_detalhes} id="Thanos_detalhes"/>

            </div>


        </Container>

    );
}