import styled from "styled-components";
import device from "../Device";

const SliderHeroStyle = styled.div`
  .slider-container__inner {
    display: flex;
    flex-flow: row;
    width: calc(4 * 100%);
    position: relative;
  }

  .slider {
    width: 100%;
    position: relative;
  }

  .gatsby-image-wrapper {
    display: flex;
    width: 100vw;
    height: 500px;
  }

  img {
    width: 100%;
  }

  .info-hero-container {
    box-sizing: border-box;
    position: absolute;
    bottom: 5%;
    left: 0%;
    width: 100%;
    height: auto;
    padding: 20px;
    background-color: #ffffff40;
    backdrop-filter: blur(5px);
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: left;
    border-bottom: 5px solid var(--primary-color);
    transition-property: border, background-color;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

    @media ${device.laptop} {
      background-color: #f6f6f600;
      width: 33%;
    }
  }

  .info-hero-container:hover {
    @media ${device.laptop} {
      border-bottom: 5px solid var(--primary-color);
      background-color: var(--gray-light-color);
    }
  }

  h1 {
    font-size: 30px;
    margin: 0;
  }

  p {
    font-size: 16px;
  }

  .slider-btns {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }

  .slider-controls {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }

  .slider-controls button {
    border: none;
    cursor: pointer;
  }

  .slider-next-btn,
  .slider-prev-btn {
    display: flex;
    justify-content: space-between;
  }

  .slider-next-btn svg {
    margin-left: 10px;
  }

  .slider-prev-btn svg {
    margin-right: 10px;
  }

  .btn {
    padding: 15px;
    border-radius: 4px;

    @media ${device.laptop} {
      background-color: #fff;
      box-shadow: 4px 4px 4px #00000073;
      transition: box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;
    }
  }

  .btn:hover {
    @media ${device.laptop} {
      color: white;
      box-shadow: 7px 7px 7px #00000073;
      background: rgb(5, 78, 129);
      background: linear-gradient(
        132deg,
        rgba(5, 78, 129, 1) 19%,
        rgba(45, 130, 190, 1) 73%,
        rgba(8, 126, 208, 1) 91%
      );
    }
  }
`;

export default SliderHeroStyle;
