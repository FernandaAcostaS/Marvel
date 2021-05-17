import React from "react";

import { Container } from './styles';
import User from '../../Components/User';

function Session1() {

  return (
    
    <Container>

      <div id="title">
        <h1>          
            MARVEL
        </h1>
      </div>

      <User className="login"/>

    </Container>

  );
  
}

export default Session1;