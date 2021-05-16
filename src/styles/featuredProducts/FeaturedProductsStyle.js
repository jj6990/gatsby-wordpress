import styled from "styled-components";
import device from "../Device";

const FeaturedProductsStyle = styled.section`
  background-color: var(--gray-light-color);
  padding-bottom: 30px;

  .featured-products__title {
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin-bottom: 30px;
    margin-top: 30px;

    h2 {
      font-size: 32px;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 0;
    }

    p {
      font-size: 16px;
      text-align: center;
      font-family: mediumFont;
    }
  }

  .product-card {
    background-color: white;
    min-height: 355px;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  .product-card-content {
    background-color: white;
    height: 100%;
    padding: 30px 15px 15px 15px;
  }

  .product-card-content--no-padding {
    background-color: white;
    height: 100%;
    padding: 5px 15px 30px 15px;; 
  }

  h3 {
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
  }

  .product-card__on-sale-bar {
    background-color: var(--secondary-color);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    max-width: 200px;

    p {
      margin-top: 0;
      margin-bottom: 0;
      text-transform: uppercase;
      font-size: 14px;
      font-family: mediumFont;
    }
  }

  .product-card__category {
    display: flex;
    justify-content: center;

    a {
      text-transform: uppercase;
      font-size: 14px;
      text-align: center;
      color: var(--gray-medium-color);
    }
  }

  .product-image {
      display: flex;
      flex-flow: column;
      justify-content: center;
      width: 100%;

    img {
      width: 200px;
      height: 200px;
      margin: auto;
    }
  }

  .product-card__price {
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
    max-height: 40px;
    margin-top: 10px;
    
  }

  .product-current-price {
    color: var(--secondary-color);
    font-family: boldFont;
    margin-bottom: 5px;
  }

  .product-prev-price {
    color: var(--gray-medium-color);
    font-family: mediumFont;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 15px;

    span {
        text-decoration: line-through;
        
    }
  }

  .swiper-wrapper {
    padding-bottom: 20px;
  }

  .swiper-slide {
    height: auto;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    min-height: 185px;

    @media ${device.tablet} {
      min-height: 225px;
    }
  }

  .swiper-scrollbar {
    background: #f1f1f1;
    height: 5px;
  }

  .swiper-scrollbar-drag {
    background: var(--primary-color);
  }

  .product-card__button {
    background-color: var(--primary-color);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;

    a {
      color: white;
      font-size: 18px;
    }

    .arrow-container svg {
      height: 20px;
      width: 20px;
      padding-left: 10px;
    }
  }
`;

export default FeaturedProductsStyle;
