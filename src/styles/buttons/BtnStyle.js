import styled from 'styled-components';
import device from '../Device';


const BtnStyle = styled.button`
    background-color: ${props => props.btnClass ? "var(--primary-color)" : "var(--secondary-color)"};
    color: ${props => props.btnClass ? "var(--white-color)" : "var(--black-color)"};
    appearance: none;
    border: none;
    border-radius: 3px;
    padding: 10px;
    font-size: 16px;
    max-width: 300px;
    cursor: pointer;
        
`;

export default BtnStyle;
