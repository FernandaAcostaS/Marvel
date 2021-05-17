import React, { useState, useEffect, useRef } from 'react';


import modal_capitao from '../../assets/modal_capitao.png';




import { Container, } from './styles';

export default ({  }) => {


    return (

        <Container >

            <div className="cardcapitao">

                <img src={modal_capitao} id="modal_capitao"/>

            </div>


        </Container>

    );
}