import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }
  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 15%;
`;


export const AlertInner = styled.div`
display: inline-block;
  padding: 2px 5px;
  z-index: 1;
  background-color: #9FE2BF;
  font-weight: bold;
  box-shadow: 100px 2px 10px -3px rgb(0 0 0 / 70%);
  -webkit-box-shadow: 1px 2px 10px -3px rgb(0 0 0 / 70%);
  -moz-box-shadow: 1px 2px 10px -3px rgb(0 0 0 / 70%);

`;