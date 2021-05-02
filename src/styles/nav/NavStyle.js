import styled from 'styled-components';
import device from '../Device';

const NavStyle = styled.nav`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media ${device.laptop} {
      width: 33.33%;
  }

  .logo-container {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    max-height: 40px;
    margin-bottom: 20px;

    @media ${device.tabletS} {
      justify-content: start;
      max-height: 90px; 
    }
    @media ${device.laptop} {
      margin-right: 20px; 
      width: 33.33%;
      margin-bottom: 0;
    
    }
  }

  img {
    width: 100%;
    padding-top: 2px;
    
    @media ${device.tablet} {
      width: 285px;
    
    }
    @media ${device.laptop} {
      width: 100%;
    
    }
  }

  .top-nav {
    display: flex;
    flex-flow: column;
    width: 100%;
  

    @media ${device.laptop} {
      flex-flow: row;
      justify-content: space-between;
      margin-bottom: 20px; 
    }
  }
   
  .bottom-nav {
    display: flex;
    flex-flow: row;
    width: 100%;
  }
`;

export default NavStyle;
