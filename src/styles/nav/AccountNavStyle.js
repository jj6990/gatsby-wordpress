import styled from 'styled-components';
import device from '../Device';

const AccountNavStyle = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding-inline-start: 0;
  width: 100%;

  @media ${device.laptop} {
      width: 33.33%;
      justify-content: flex-end;
      margin-bottom: 0;
  }

  
  li {
    color: var(--black-color);
    font-size: 2rem;
    margin-right: 15px;

    @media ${device.tabletS} {
      margin-right: 45px;
    }

    @media ${device.laptop} {
      margin-right: 20px;
    }
  }

  a:visited {
    color: var(--black-color);
  }

  .icon-cart {
    width: 22px;
  }

  .cart-burguer-container {
    display: flex;
    flex-flow: row;
  }

  .cart-container {
    border-radius: 3px;
    display: flex;
    flex-flow: row;
    align-items: center;
    padding: 5px;
    width: 50px;
    justify-content: space-around;

    @media ${device.laptop} {
      margin-right: 0;
    }
  }

  .count-cart {
    color: var(--black-color);
    line-height: 0;
  }

  ul { 
    display:flex;
    padding-left: 0;
    flex-flow: row;
    justify-content: flex-end;
    width: auto;
  }

  li {
    font-size: 1.5rem;
    width: auto;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li a {
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  svg {
    margin-left: 10px; 
  } 

  .svg-inline--fa.fa-w-16 {
    width: 20px;
    height: 20px; 
  }
`;

export default AccountNavStyle;
