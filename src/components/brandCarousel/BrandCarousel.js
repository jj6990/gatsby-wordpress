import React, { useLayoutEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import BrandCarouselStyle from "../../styles/brandCarousel/BrandCarouselStyle";
import FullWidthCont from "../../styles/containers/FullWidthCont";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export default function BrandCarousel() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const data = useStaticQuery(graphql`
    query brandPhoto {
      allWpBrandPhoto {
        edges {
          node {
            brandcarousel {
              descripcion
              imagen {
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
  `);

  const brandPhotos = data.allWpBrandPhoto.edges;
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
    <BrandCarouselStyle>
      <FullWidthCont>
        <Swiper
          spaceBetween={20}
          slidesPerView={slices()}
          pagination={true}
          className="swiper-wrapper"
        >
          {brandPhotos.map((element, i) => {
            const photo = getImage(
              element.node.brandcarousel.imagen.localFile.childImageSharp
                .gatsbyImageData
            );

            console.log(element);

            const imgDesc = element.node.brandcarousel.descripcion;

            return (
              <SwiperSlide key={i}>
                <div className="logo-image-container">
                  <GatsbyImage
                    image={photo}
                    alt={imgDesc}
                    className="logo-image"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </FullWidthCont>
    </BrandCarouselStyle>
  );
}
