import styled from "styled-components";
import device from "../Device";

const CategorySliderStyle = styled.section`
  .title-container {
    display: flex;
    justify-content: center;
  }

  h2 {
    font-size: 32px;
    text-align: center;
    text-transform: uppercase;
  }

  .utility-card {
    background-color: var(--primary-color);
    color: white;
    padding: 15px;
    height: auto;
  }

  .arrow-container {
    display: flex;
    justify-content: flex-end;
  }

  h3 {
    font-size: 20px;
    text-transform: uppercase;
  }

  .link-button {
    text-transform: uppercase;
    background-color: white;
    border-radius: 4px;
    text-align: center;
    padding: 16px;
    font-size: 18px;
    word-wrap: break-word;
  }

  .link-container {
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 20px; 
  }

  .svg-inline--fa.fa-w-16 {
    width: 30px;
    height: 30px;
  }

  .gatsby-image-wrapper {
    object-fit: cover;
    position: absolute;
    z-index: -1;
    padding: 15px;
    width: 88%;
  }

  .swiper-wrapper {
    padding-bottom: 20px;
  }

  .swiper-slide {
    height: auto;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    min-height: 225px;
  }

  .swiper-scrollbar {
    background: #f1f1f1;
    height: 5px;
  }

  .swiper-scrollbar-drag {
    background: var(--primary-color);
  }
`;

export default CategorySliderStyle;
