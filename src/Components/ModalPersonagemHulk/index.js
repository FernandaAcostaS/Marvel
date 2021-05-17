import React, { useState, useEffect, useRef } from 'react';


import Hulk_detalhes from '../../assets/Hulk_detalhes.png';




import { Container, } from './styles';

export default ({  }) => {


    return (

        <Container >

            <div className="cardhulk">

                <img src={Hulk_detalhes} id="Hulk_detalhes"/>

            </div>



        </Container>

    );
}