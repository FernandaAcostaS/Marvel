import React, { useState, useEffect } from "react";
import { Link , useHistory , useLocation } from 'react-router-dom';

import logomarvel from '../../assets/logomarvel.png';
import MenuButton from "../../assets/MenuButton.svg";

import profile from '../../assets/profile.png';


import { Desktop , Mobile } from './styles';

export default function Header() {

  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [toogleMenu, setToogleMenu] = useState(false);

  const history = useHistory();
  const { pathname, state } = useLocation();
  const indexPage = state || 'inicio';
  const [open, setOpen] = useState(false);

  window.addEventListener("resize", () => {
    setWidthScreen(window.innerWidth);
  });
    
  return widthScreen > 968 ? (

    <Desktop>

          <img
            onClick={() => history.push("/")}
            src={logomarvel}
            alt="Marvel"
          />
          <ul>
            <li>
              <Link to={{pathname: "/personagens", state: 'personagens'}}> <span className={indexPage === 'personagens' ? 'ativado' : 'desativado'}>Personagens</span> </Link>
            </li>
            <li>
              <Link to={{ pathname: "/filmes", state: "filmes" }}> <span className={indexPage === 'filmes' ? 'ativado' : 'desativado'}>Filmes</span> </Link>
            </li>
            <li>
              <Link to={{ pathname: "/hqs", state: "hqs" }}> <span className={indexPage === 'hqs' ? 'ativado' : 'desativado'}>HQs</span> </Link>
            </li>
            <li>
            <img
              src={profile}
              alt="Profile"
              />
            </li>
            <li>
              <Link to={{ pathname: "/", state: "sair" }}>
                 <span className={indexPage === 'sair' ? 'ativado' : 'desativado'}>Sair</span> 
              </Link>
            </li>
          </ul>
    </Desktop>
  ) : (

    <Mobile>
                <div
                  id="expandedMenu"
                  className={toogleMenu ? "expanded" : ""}
                  onClick={() => setToogleMenu(!toogleMenu)}
                > 
                <img className="logo" src={logomarvel} alt="Marvel" />
                <img className="menu" src={MenuButton} alt="botao menu" />

                <ul>
                  <li>
                    <Link to="/personagens"> <span>Personagens</span> </Link>
                  </li>
                  <li>
                    <Link to="/filmes"> <span>Filmes</span> </Link>
                  </li>
                  <li>
                    <Link to="/hqs"> <span>HQs</span> </Link>
                  </li>
                </ul>
              </div>

    </Mobile>

 

    );
  }

