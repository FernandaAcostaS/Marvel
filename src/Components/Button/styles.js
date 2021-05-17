import styled from 'styled-components';


export const Container = styled.div`

  display: grid;
  grid-template-columns: 1fr repeat(3, 76px) 1fr;
  grid-template-rows: repeat(2, 50px);
  grid-gap: 16px;

  width:400px;
  height:100px;



    
.button {
  height: 65px;
  width: 400px;

  grid-column:1/3;

  text-transform: uppercase;

  text-decoration: none;
  font-weight: 600;
  transition: color 200ms;
  transition-property: background-color, color;
  border: 0;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
}

.button--rounded {
  border-radius: 100px;
}

.button--bordered-green {
  padding: 7px 10px;
  border-color: #FF0000;
  color: #FF0000;
  border: 2px solid;
}

.button--bordered-green:hover {
  background-color: #FF0000;
  color: #fff;
}


.button--contained-green {
  background-color: #FF0000;
  color: #fff;
}

.button--contained-green:hover {
  background-color: #FF0000;
  border-color: #ff0000;
  color: #fff;
}

`;