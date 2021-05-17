import React, { useState, useEffect } from "react";
import { Link , useHistory , useLocation } from 'react-router-dom';

import { oneOf, bool } from 'prop-types';

import cx from 'classnames';
import { Container } from './styles';


const cbn = 'button';

const Button = ({ onClick, to, theme, rounded, children, className, ...restProps }) => {
  const Component = to ? Link : 'button';

  
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [toogleMenu, setToogleMenu] = useState(false);

  const history = useHistory();
  const { pathname, state } = useLocation();
  const indexPage = state || 'inicio';
  const [open, setOpen] = useState(false);

  window.addEventListener("resize", () => {
    setWidthScreen(window.innerWidth);
  });

  return (
    <Container>
        <Component
        {...restProps}
        className={cx(className, cbn, `${cbn}--${theme}`, {
            [`${cbn}--rounded`]: rounded,
        })}
        onClick={() => history.push("/personagens")}
        to={to}
        >
        {children}
        </Component>
    </Container>
  )
}

Button.propTypes = {
  rounded: bool,
  theme: oneOf([
    'bordered-green',
    'contained-green',
  ]),
};

export default Button;