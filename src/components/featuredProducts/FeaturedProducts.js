import React, { useLayoutEffect, useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import FeaturedProductsStyle from "../../styles/featuredProducts/FeaturedProductsStyle";
import FullWidthCont from "../../styles/containers/FullWidthCont";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function InfoSection() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const data = useStaticQuery(graphql`
    query FeaturedProducts {
      allWpProduct(
        filter: {
          productCategories: {
            nodes: { elemMatch: { name: { eq: "Productos Recomendados" } } }
          }
        }
      ) {
        edges {
          node {
            link
            productCategories {
              nodes {
                name
                parentId
                link
              }
            }
            ... on WpSimpleProduct {
              id
              name
              regularPrice
              onSale
              salePrice
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const productsData = data.allWpProduct.edges;
  const [windowWidth, setWindowWidth] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const slices = () => {
    if (windowWidth > 1024) {
      return 4;
    } else if (windowWidth > 768) {
      return 3;
    } else {
      return 2;
    }
  };
  return (
    <FeaturedProductsStyle>
      <FullWidthCont>
        <div className="featured-products">
          <div className="featured-products__title">
            <h2>Productos Recomendados</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
              libero et urna vehicula vestibulum nec id lorem.
            </p>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={slices()}
            scrollbar={{ draggable: true }}
            className="swiper-wrapper"
          >
            {productsData.map((element, i) => {
              const photo = getImage(
                element.node.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData
              );

              const productName = element.node.name;
              const imgAlt = element.node.name;
              const productLink = element.node.link;
              const productPrice = element.node.regularPrice;
              const isProductOnSale = element.node.onSale;
              const productSalePrice = element.node.salePrice;

              const productCategory = element.node.productCategories.nodes.filter(
                (category) => {
                  if (category.parentId) {
                    return category.name;
                  }
                }
              );

              const [category] = [...productCategory];

              return (
                <SwiperSlide key={i}>
                  <div className="product-card">
                    {isProductOnSale && (
                      <div className="product-card__on-sale-bar">
                        <p>Producto en oferta</p>
                      </div>
                    )}
                    <div
                      className={
                        isProductOnSale
                          ? "product-card-content--no-padding "
                          : "product-card-content"
                      }
                    >
                      <div className="product-card__inner">
                        <div className="product-card__category">
                          <Link to={category.link}>{category.name}</Link>
                        </div>
                        <div className="product-card__name">
                          <h3>{productName}</h3>
                        </div>

                        <GatsbyImage
                          image={photo}
                          alt={imgAlt}
                          className="product-image"
                        />

                        {isProductOnSale ? (
                          <div className="product-card__price">
                            <p className="product-current-price">
                              {productSalePrice}
                            </p>
                            <p className="product-prev-price">
                              Antes: <span>{productPrice}</span>
                            </p>
                          </div>
                        ) : (
                          <div className="product-card__price">
                            <p className="product-current-price">
                              {productPrice}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="product-card__button">
                      <Link to={productLink}>Ver producto</Link>
                      <div className="arrow-container">
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </FullWidthCont>
    </FeaturedProductsStyle>
  );
}
