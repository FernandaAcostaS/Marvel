  
import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import StoreContext from '../Store/Context';
import Button from '../Button';

import { Container } from './styles';

function initialState() {
    return { user: '', password: ''};
}

function login({ user, password }) {
    if(user ==='admin' && password === 'admin') {
        return { token: '1234' };
    }
    return {error: 'Usuario ou senha invalido'};

}

const UserLogin = () => {

    const [values, setValues] = useState(initialState);
    const {setToken} = useContext(StoreContext);
    const history = useHistory();

    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values, 
            [name]: value,
        });
    }

    function onSubmit(event) {
        event.preventDefault();

        const { token } = login(values);

        if (token) {
            setToken(token);
            return history.push('/personagens');
        }

        setValues(initialState);
    }

    return (

        <Container>
            <div className="user-login">
                <h1 className="user-login__title">Bem-vindo(a) de volta!</h1>
                <p>Acesse sua conta</p>
                <form onSubmit={onSubmit}>
                    <div className="user-login__form-control">
                        <label htmlFor="user">Usuario</label>
                        <input id="user" type="text" name="user" autoComplete="off" onChange={onChange} value={values.user} />
                    </div>
                    <div className="user-login__form-control">
                        <label htmlFor="password">Senha</label>
                        <input id="password" type="password" name="password" onChange={onChange} value={values.password} />
                    </div>
                    <Button
                        type="submit"
                        theme="contained-green"
                        className="user-login__submit-button"
                        rounded
                    >
                    Entrar
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default UserLogin;
