import styled, { keyframes } from "styled-components";

const animate = keyframes`

  0% {
    transform: translateX(100px);
    opacity: 0;
}
50%{
    opacity: .3;
}
100%{
    transform: translateX(0px);
    opacity: 1;
}


`;

export const Container = styled.div`
  font-family: "Poppins";
  background: transparent;
  .container-two {
    width: 100%;
    height: 83vh;
    max-height: 83vh;
    border-radius: 10px;
    font-family: "Poppins";
    margin-top: 1.9rem;

    background: transparent;
  }

  @media only screen and (max-width: 600px) {
    .modal .box-img {
      top: 30%;
      width: 100%;
      max-width: 100%;
      border: 2px solid red;
      background: red;
    }
    .img-body {
      width: 70px;
      padding: 0;
      margin: auto;
      align-items: center;
      justify-content: center;
      height: 40px;
    }
    .img-body-row {
      padding: 0;
      margin: auto;
      margin: 0;
      align-items: center;
      text-align: center;
      justify-content: center;
    }
  }

  /* .MuiTable-root {
    max-height: 50vh;
    height: 50vh;
    overflow-x: hidden;
  } */
  .MuiTableBody-root {
    overflow-y: scroll;
    overflow-y: auto;
  }
  .tbody-container {
    /* max-height: 54vh;
    height: 54vh;

    width: 98.4%;
    margin: 10px;
    background: transparent;
    overflow-y: auto; */

    .tableBody {
      background: red;
      height: 100%;
      max-height: 57vh;
      background: #fff;
      .tableCell {
        height: 50px;
        margin-right: 50px;
        padding: 0.5rem 0.5rem 0 1rem;
        font-weight: 400;
        font-size: 1rem;
        color: ${(props) => props.theme.colors.font};
        background: #fff;
        width: 150px;
      }
      .MuiTableRow-root .css-34nofg-MuiTableRow-root {
        height: 10px;
        padding: 0;
        max-height: 50px;
      }
    }
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #00000001;
    }

    ::-webkit-scrollbar-track {
      background-color: #000;
    }
  }

  @media only screen and (max-width: 600px) {
    .container-whats {
      display: none;
    }
    .title-form {
      color: gold;
    }
    .ver-resultado {
      display: none;
    }
    .ver-resultado-mobile {
      display: block;
      margin: auto;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .baixar-export .baixar-exemplo {
      padding: 0 1px;
    }
    .btn-export {
      font-size: 1rem;

      padding-top: 5px;
    }
    .btn-export .btn {
      padding: 0 2px;

      line-height: 1;
      width: 120px;
      margin-top: 10px;
      margin: 19px 10px 0 0;
    }
    .MuiTable-root {
      width: 100%;
    }
    .tbody-container {
      width: 94%;
    }
  }
  grid-template-columns: repeat(2, 1fr);
`;
