import styled from "styled-components";
import device from "../Device";

const BtnStyle = styled.button`
  background-color: ${(props) =>
    props.btnClass ? "var(--primary-color)" : "var(--secondary-color)"};
  color: ${(props) =>
    props.btnClass ? "var(--white-color)" : "var(--black-color)"};
  appearance: none;
  border: none;
  border-radius: 3px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 4px 4px 4px #00000073;
  transition: box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    box-shadow: 7px 7px 7px #00000073;
    background-color: rgb(5, 78, 129);
    background: linear-gradient(
      132deg,
      rgba(5, 78, 129, 1) 19%,
      rgba(45, 130, 190, 1) 73%,
      rgba(8, 126, 208, 1) 91%
    );
  }
`;

export default BtnStyle;
