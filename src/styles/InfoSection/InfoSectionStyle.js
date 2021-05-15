import styled from "styled-components";
import device from "../Device";

const InfoSectionStyle = styled.section`
  display: flex;
  flex-flow: column;
  margin-top: 60px;

  @media ${device.laptop} {
    flex-flow: row;
  }

  h3 {
    font-size: 45px;
    text-transform: uppercase;
  }

  p {
    font-size: 18px;
    font-family: mediumFont;
  }

  .info-section-content {
    width: 100%;

    @media ${device.laptop} {
      width: 50%;
      margin-right: 30px;
    }
  }

  button {
    height: 45px;
    min-width: 180px;
  }

  .info-section-image-container {
    max-height: 200px;
    width: 100%;
    display: flex;
  }

  .info-section-gallery {
    width: 100%;

    @media ${device.laptop} {
      width: 50%;
    }
  }

  .info-section-gallery__inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 4fr 5fr;
    grid-gap: 20px;
    width: 100%;
  }

  .gallery-img-wrapper {
    height: 100%;
    box-shadow: 4px 4px 4px #00000073;
    transition: box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;
  }

  .gallery-img-wrapper:hover {
    box-shadow: 29px 29px 29px #00000073;
    background-color: rgb(5, 78, 129);
  }
`;

export default InfoSectionStyle;
