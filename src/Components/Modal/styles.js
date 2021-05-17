import styled from 'styled-components';

export const Container = styled.div`
    display: ${props=>props.status ? 'flex' : 'none'};
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 200;
    justify-content: center;
    align-items: center;
`;

export const ModalBody = styled.div`
    width: 659px;
    height: 439px;
    background-color: #FFFFFF;
    max-width: 100vw;
    max-height: 95vh;

    overflow-x: hidden;
    overflow-y: scroll;

    position: relative;
    z-index: 300;

    @media (max-width: 869px) {
        width: 434px !important;
        height: 439px !important;
        overflow-x: scroll !important;
    }


    .button{

        @media (max-width: 869px) {
            top: 25.9em !important;
            right: 0.5em !important;
    
        }
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;

            top: 25.8em;

            left: 39.8em;

                cursor: pointer;
                outline: none;
                background: transparent;
                font-family: Inter;
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 24px;
                letter-spacing: -0.02em;

                color: #FFFFFF;

                border: none;

                width: 30px !important;

                span{
                    z-index: 500; 
                }
    }

            



`;