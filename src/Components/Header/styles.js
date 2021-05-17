import styled from 'styled-components';



export const Desktop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  /* line-height: 19px; */
  display: flex;
  align-items: flex-end;
  letter-spacing: -0.02em;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0) 0%,
    rgba(0, 0, 0, 0.0) 100%
  );
  display: grid;
  grid-template-columns: 1fr repeat(12, 76px) 1fr;
  grid-template-rows: 100px;
  grid-gap: 24px;
  img {
    grid-column: 2/3;
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
    margin: 0px 0px 0px 0px;
  }

  ul {

    list-style: none;
    display: flex;
    grid-column: 7 / 12;
    justify-content: space-between;
    align-items: flex-top;
    margin: 0px 0px 0px 0px;
    li {
      img {
        margin: -20px -80px -10px 10px;
      }
      a{
        text-decoration: none;
        color: white;
        .ativado {
        color: red;
        }
        .desativado {
          color: white;
        }
      }
      a:hover span {
        text-decoration: none;
        color: red !important;
      }
      
    }
  }

  #pop-background {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 500000;
    background: transparent;
    #pop-container {
      display: flex;
      flex-direction: column;
      width: 400px;
      height: 400px;
      background: white;
      border-radius: 10px;
      box-shadow: 2px 2px 5px 2px rgba(0,0,0,0.3), -2px -2px 5px rgba(0,0,0,0.3);
      position: relative;
      padding: 2em;

      #pop-title {
        font-size: 35px;
        text-align: center;
      }

      #pop-message {
        font-size: 20px;
        margin-top: 2em;
        text-align: center;
        font-weight: normal !important; 
      }

      #pop-button-container {
        display: flex;
        justify-content: space-evenly;
        width: auto;
        left: 2em;
        right: 2em;
        align-self: flex-end;
        position: absolute;
        bottom: 2em;
        .pop-button {
          cursor: pointer;
          width: 30%;
          height: 55px;
          font-size: 18px;
          font-weight: 500;
          background-color: transparent;
          border: 1px solid rgba(0,0,0,0.8);
          /* &:nth-child(1){
              margin-left: 2em;
          }
          &:nth-child(2) {
              margin-right: 2em;
          } */
            
        }
        a {
          width: 30%;
          height: 55px;
          text-decoration: none;
          &:visited {
            text-decoration: none;
          }
          .pop-button {
            width: 100%;
            height: 55px;
            font-weight: 500;
            font-size: 18px;
            border: 0px;
          }
        }
      }
    }
  }
`;

export const Mobile = styled.div`
  @media (min-width: 600px) {
    font-size: 3vw;
  }

  font-size: 4.5vw;
  font-family: Inter;
  font-weight: normal;
  line-height: 23px;
  background: linear-gradient(
    100deg,
    rgba(0, 0, 0, 0.0) 0%,
    rgba(0, 0, 0, 0.0) 100%
  );

  display: grid;
  grid-template-columns: 5px repeat(5, 1fr) 5px !important;
  grid-template-rows: 100px;
  grid-gap: 16px;


  .logo {
    list-style: none;
    grid-column: 1/2 !important;
    margin-top: auto;
    margin-bottom: auto;
  }
  .menu {
    list-style: none;
    grid-column: 6/7;
    margin-top: auto;
    margin-left: auto;
    margin-bottom: auto;
  }
  #expandedMenu {
    display: grid;
    
    grid-template-columns: 5px repeat(5, 1fr) 5px !important;

    grid-template-rows: 100px auto;
    grid-gap: 16px;

    background-color: linear-gradient(
    100deg,
    rgba(0, 0, 0, 0.0) 0%,
    rgba(0, 0, 0, 0.0) 100%);

    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    z-index: 10;
    transition: 300ms;
    .logo {
      list-style: none;
      grid-column: 2 / 4;
      margin-top: auto;
      margin-bottom: auto;
    }
    .menu {
      list-style: none;
      grid-column: 6 / 7;
      margin-top: auto;
      margin-left: auto;
      margin-bottom: auto;
    }
    ul {
      height: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      grid-column: 3 / 7;
      justify-content: center;
      align-items: flex-end;
      li {
        display: none;
        padding-top: 15px;
        a,
        a:link,
        a:visited,
        a:active {
          color: white;
          text-decoration: none;
        }
        a:hover {
          color: blue;
        }
      }
      li:first-child {
        padding-top: 0;
      }
    }
  }
  .expanded {
    background-color: black;
    .menu {
      transform: rotate(90deg);
    }
    ul {
      animation: expandUl 300ms forwards;
      li {
        animation: showLi 500ms forwards;
        display: block !important;
      }
    }
    @keyframes expandUl {
      from {
        height: 0;
        margin-bottom: 0px;
      }
      to {
        height: 50vh;
        margin-bottom: 120px;
      }
    }
    @keyframes showLi {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;


  /*  @media (max-width: 850px) {
        grid-template-columns:  1fr repeat(5,64px) 1fr !important;
        grid-template-rows: 100px !important;
        grid-gap: 16px !important;
        background-size: auto 100%;
        background-position: center !important;
        height: 100px;
        background-color: red;

        img{
            height:80.95px !important;
            width: 32px !important;
            grid-column:1/3 !important;
            grid-row: 1/2 !important;
            

        }

        div{
            grid-column:5/6 !important;
            grid-row: 1/2 !important;

            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;


            font-family: inter;
            background-color: red;

            size: 10px !important;

            margin: 0px 0px 0px 0px !important;

            a:link {
            text-decoration: none;
            }

            a:visited {
            text-decoration: none;
            }

            a:hover {
            text-decoration: underline;
            }

            a:active {
            text-decoration: underline;
            }

            a{
                span{
                    color: white;
                }
            }
        }
    }

    }


/*    @media (max-width: 789px) {
        grid-template-columns: 1fr, repeat(5, 64px) 1fr !important;
        grid-template-rows: 64px !important;
        width: 100%;
        grid-gap: 16px !important;
        background-size: auto 10%;
        background-position: 15%;
        background-color: blue !important;

        img{
            position: absolute !important;
            height:80.95px !important;
            width: 32px !important;
            grid-column:2/5 !important;
            grid-row: 1/2 !important;
            

        }

        div{
            grid-column:3/4 !important;
            grid-row: 1 !important;

            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;


            font-family: inter;
            background-color: red;

            size: 10px !important;

            margin: 0px 0px 0px 0px !important;

            a:link {
            text-decoration: none;
            }

            a:visited {
            text-decoration: none;
            }

            a:hover {
            text-decoration: underline;
            }

            a:active {
            text-decoration: underline;
            }

            a{
                span{
                    color: white;
                }
            }
        }
    }

@media (max-width: 789px) {
        grid-template-columns: 1fr, repeat(5, 64px) 1fr !important;
        grid-template-rows: 64px !important;
        grid-gap: 16px !important;
        background-size: auto 10%;
        background-position: 15%;
        background-color: green !important;

        img{

        }

        div{
            grid-column:3/4 !important;
            grid-row: 1 !important;

            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;


            font-family: inter;
            background-color: red;

            size: 10px !important;

            margin: 0px 0px 0px 0px !important;

            a:link {
            text-decoration: none;
            }

            a:visited {
            text-decoration: none;
            }

            a:hover {
            text-decoration: underline;
            }

            a:active {
            text-decoration: underline;
            }

            a{
                span{
                    color: white;
                }
            }
        }
    }



 
     @media (max-width: 980px) {
        grid-template-columns: 1fr, repeat(5, 64px) 1fr !important;
        grid-template-rows: 64px !important;
        grid-gap: 16px !important;
        background-size: auto 10%;
        background-position: 15%;
        background-color: green;

        img{
            grid-column: 1 !important;
            grid-row: 1 !important;
            width: 80.95px !important;
            height: 32px !important;
        }

        div{
            grid-column:3/4 !important;
            grid-row: 1 !important;

            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;


            font-family: inter;
            background-color: red;

            size: 10px !important;

            a:link {
            text-decoration: none;
            }

            a:visited {
            text-decoration: none;
            }

            a:hover {
            text-decoration: underline;
            }

            a:active {
            text-decoration: underline;
            }

            a{
                span{
                    color: white;
                }
            }
        }
    }
     background: rgba(255, 255, 255, 0.0);grid-area: header;
    width: 100%;

    height: 100px;
    margin: 0;
    padding: 0;

    display: grid;


  grid-template-areas: 
    ". img . . . . .  div div div div div ";

        background: rgba(255, 255, 255, 0.0);;
        font-size: 14px;
        color: #333;
        font-family: sans-serif;



    img{
        background-image: url('../../assets/Moblize.png');
        height: 60px;
        width: 151.78px;
        padding: 20px 127px;
    }


    div{

        grid-column: 12 / 16;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: end;
        grid-gap: 155px 24px;
        font-family: inter;
        weight: 700px;
        style: normal;
        size: 16px;

        a:link {
        text-decoration: none;
        }

        a:visited {
        text-decoration: none;
        }

        a:hover {
        text-decoration: underline;
        }

        a:active {
        text-decoration: underline;
        }

        a{
            span{
                color: white;
            }
        }
    }
*/


 /*   color : #FFF; 
    display: flex;
    align-items: center;

    justify-content: space-between;

    background: #000FFF;

    box-sizing: border-box;

    img{
        background-image: url('../../assets/Moblize.png');
        height :60px;
        width: 151.78px;
        padding: 20px 127px;
    }


    div{

        display: flex;
        align-items: center;
        justify-content: space-between;
        grid-gap: 5px 24px;


        a:link {
        text-decoration: none;
        }

        a:visited {
        text-decoration: none;
        }

        a:hover {
        text-decoration: underline;
        }

        a:active {
        text-decoration: underline;
        }

        a{
            span{
                color: white;
            }
        }
    }

@media (max-width:680px){

    flex-direction: column;
    justify-content: center;
    margin: 10px 0px;


    img{
        justify-content: center;
        margin: 10px 0px;

    }
    
    div{

        justify-content: center;
        margin: 0px 0px;
    }
}*/



    




