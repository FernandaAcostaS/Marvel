import styled from 'styled-components';


export const Container = styled.div`

  display: grid;
  grid-template-columns: 1fr repeat(3, 76px) 1fr;
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 16px;

  grid-column:2/7;
  grid-row: 4/7;

  width:400px;
  height:500px;


  .user-login {
    grid-column:1/4;

    width: 400px;
    margin: 0px;
  
    }

    .user-login__title {
    font-family: Inter;
    font-size: 30px;
    color: #FF0000;
    margin-bottom: 5px;

    }
    p{
      font-family: Inter;
      font-size: 20px;

      color: #84848d;

      margin-bottom: 35px;
      font-size: 20px;

    }

    .user-login__form-control {
    display: flex;
    flex-direction: column;
    border-radius: 100px;
     border-radius: 100px;


    margin: 10px 0px 20px 0px;
    }

    .user-login__form-control label {
    margin-bottom: 5px;
   border-radius: 100px;

    color: #ffffff;
    font-size: 16px;
    }

    .user-login__form-control input {
    border-radius: 4px;
    border: 1px solid #FFFFFF;
    height: 73px;
    border-radius: 100px;

    padding: 5px 10px;
    }

    .user-login__submit-button {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    }



`;