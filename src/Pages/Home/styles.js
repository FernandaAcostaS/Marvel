import styled from 'styled-components';

import marvelf from '../../assets/marvelf.svg';

export const Container = styled.div`

  display: grid;
  grid-template-columns: 1fr repeat(12, 76px) 1fr;
  grid-template-rows: repeat(7, 1fr);
  grid-gap: 16px;

  width:100%;
  height:910px;
  background-color: #000000;

  background-image: url(${marvelf});
  background-repeat: no-repeat;
  background-position: right;
 
  #title {
    grid-column: 2/6;
    grid-row: 2/3;
    display: grid;
    grid-template-columns: 1fr repeat(5, 76px) 1fr;
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 16px;
    margin: 0px 0px;
    margin-top: auto;
    margin-bottom: auto;

    h1 {
      grid-column: 2/6;
      grid-row: 1/2;
      background-color:  #FF0000;
      text-align: center;
        font-family: Inter;
        font-style: bold;
        font-weight: 700;
        font-size: 80px;
        line-height: 95px;
        align-items: center;


        letter-spacing: -0.02em;

        color: #ffffff;      
    }



  }

  .login{


  }
  
`;