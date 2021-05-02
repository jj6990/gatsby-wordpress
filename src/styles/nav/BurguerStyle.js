import styled from 'styled-components';
import device from '../Device';

const BurguerStyle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  height: 30px;
  width: 40px;
  margin-right: 0;
  padding: 0.6rem 1rem;

  @media ${device.laptop} {
    display: none;
  }
  .svg-inline--fa.fa-w-14 {
    width: 20px;
    height: 20px;
  }
`;

export default BurguerStyle;
