import styled from 'styled-components';
import device from '../Device';

const SearchStyle = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 20px;

    @media ${device.laptop} {
      width: 70%;
    }
    
    @media ${device.laptop} {
      margin-right: 20px;
      margin-bottom: 0;
    }
    
    input {
        width: 100%;
        padding: 2rem;
        box-sizing: border-box;
        border: none;
        background-color: var(--gray-light);
    }

    svg {
        position: absolute;
        right: 15px;
        top: 30%;
        height: 20px;
        width: 20px;
    }

    svg path {
        fill: var(--secondary-color); 
    }

`;

export default SearchStyle;
