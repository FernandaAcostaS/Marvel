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

  .card_one{
    grid-column: 2/5;
    grid-row: 3/7;

    .button1{

        grid-column:2/4 ;
        grid-row: 4/5 ;

        margin: -70px 0px 0px 30px !important;

        button{

            width: 125px;
            height: 56px;

            background: Transparent;

            border: 1px solid Transparent;
            box-sizing: border-box;

            position: relative;

            span{
                position: absolute;
                font-family: Inter;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 24px;
                display: flex;
                text-align: center;
                letter-spacing: -0.02em;
                margin: -10px 0px 0px 20px;

                color: #FFFFFF;

            }


        }

    }

  }

  .card_two{
    grid-column: 6/10;
    grid-row: 3/7;
  }

  .card_three{
    grid-column: 10/13;
    grid-row: 3/7;
  }

  .card_four{
    grid-column: 9/12;
    grid-row: 3/7;
  }

  .arrow{
    grid-column: 14/15;
    grid-row: 5/7;
  }



@media (max-width: 869px) {
        grid-template-columns: 5px repeat(5, 1fr) 5px !important;
        grid-template-rows:100px 450px 450px 450px !important;
        grid-gap: 16px !important;
        background-size: auto 100% !important;
        background-position: 50%;
        height: auto !important;
        width: auto !important;

    .card_one{
        grid-column: 3/5;
        grid-row: 2/3;

        .button1{

            grid-column:2/4 ;
            grid-row: 4/5 ;

            margin: -70px 0px 0px 30px !important;

            button{

                width: 125px;
                height: 56px;

                background: Transparent;

                border: 1px solid Transparent;
                box-sizing: border-box;

                position: relative;

                span{
                    position: absolute;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 24px;
                    display: flex;
                    text-align: center;
                    letter-spacing: -0.02em;
                    margin: -10px 0px 0px 20px;

                    color: #FFFFFF;

                }


            }

        }

      }

      .card_two{
        grid-column: 3/5;
        grid-row: 3/4;

        .button2{

          grid-column:2/4 ;
          grid-row: 4/5 ;

          margin: -70px 0px 0px 30px !important;

          button{

              width: 125px;
              height: 56px;

              background: Transparent;

              border: 1px solid Transparent;
              box-sizing: border-box;

              position: relative;

              span{
                  position: absolute;
                  font-family: Inter;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 20px;
                  line-height: 24px;
                  display: flex;
                  text-align: center;
                  letter-spacing: -0.02em;
                  margin: -10px 0px 0px 20px;

                  color: #FFFFFF;

              }


          }

        }

      }

      .card_three{
        grid-column: 3/5;
        grid-row: 4/5;

        .button3{

            grid-column:2/4 ;
            grid-row: 4/5 ;

            margin: -70px 0px 0px 30px !important;

            button{

                width: 125px;
                height: 56px;

                background: Transparent;

                border: 1px solid Transparent;
                box-sizing: border-box;

                position: relative;

                span{
                    position: absolute;
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 24px;
                    display: flex;
                    text-align: center;
                    letter-spacing: -0.02em;
                    margin: -10px 0px 0px 20px;

                    color: #FFFFFF;

                }


            }

            }
      }

    }


`;