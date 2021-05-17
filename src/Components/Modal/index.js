import React, { useState, useEffect, useRef } from 'react';

import { Container, ModalBody } from './styles';

export default ({ status, setStatus, children }) => {

    const handleModalClick = (e) => {
        if(e.target.classList.contains('modalBg')){
            setStatus(false);
        }
    }



    function closeModal() {
        setStatus(false);
    }

    return (

        <Container 
            className="modalBg"
            status={status} 
            onClick={handleModalClick}
        >


            <ModalBody status={status}>

                {children}

                <div className='button' >

                    <span onClick={closeModal}> X </span>
                
                </div>
                
            </ModalBody>

        </Container>
        
    );

} 