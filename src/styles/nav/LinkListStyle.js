import styled from 'styled-components';
import device from '../Device';

const LinkListStyle = styled.ul`
  display: flex;
  transform: translateX(${({ open }) => (open ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  flex-flow: column;
  align-items: center;
  padding-inline-start: 0;
  position: absolute;
  width: 100%;
  height: 85vh;
  left: 0;
  top: 145px;
  margin: 0;
  padding: 2rem 0;
  overflow-x: hidden;
  background: white;


  @media ${device.laptop} {
    flex-flow: row;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
    position: relative;
    top: -7px;
    padding: 0;
    height: auto;
  }

  li {
    color: var(--black-color);
    font-size: 1.5rem;
    margin-top: 1.5rem;

    @media ${device.laptop} {
      color: var(--black-color);
      margin-right: 4.5rem;
    }
  }

  a:visited {
    color: var(--black-color);
  }

  .svg-inline--fa.fa-w-16 {
    width: 20px;
    height: 20px; 
  }

  .close-container {
    position: absolute;
    right: 29px;
    top: 2px;

    @media ${device.laptop} {
      display: none;
    }
  }
`;

export default LinkListStyle;
