import React, { useState, useEffect, useRef } from 'react';


import Thor_detalhes from '../../assets/Thor_detalhes.png';


import { Container, } from './styles';

export default ({  }) => {


    return (

        <Container >

            <div className="cardthor">

                <img src={Thor_detalhes} id="Thor_detalhes"/>

            </div>


        </Container>

    );
}