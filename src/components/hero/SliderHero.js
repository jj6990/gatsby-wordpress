import React, { createRef, useLayoutEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { gsap, TimelineLite } from "gsap";
import { Draggable } from "gsap/Draggable";

import Button from "../globals/Button";

import SliderHeroStyle from "../../styles/slider/SliderHeroStyle";
import FullWidthCont from "../../styles/containers/FullWidthCont";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function SliderHero() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allWpBanner {
        edges {
          node {
            heroHomePage {
              tituloBanner
              textoBotonBanner
              descripcionBanner
              imagenBanner {
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

  gsap.registerPlugin(TimelineLite);

  const [windowWidth, setWindowWidth] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const elements = data.allWpBanner.edges;
  const sliderRefs = [];
  const sliderCont = createRef(null);
  const time = 0.5;

  const handleNext = (e) => {
    e.preventDefault();
    const tl = new TimelineLite();

    if (e.target.dataset.nextSlide == elements.length) {
      tl.to(sliderCont.current, time, { x: 0 });
    } else {
      tl.to(sliderCont.current, time, {
        x: -windowWidth * e.target.dataset.nextSlide,
      });
    }

    tl.play();
  };

  const handlePrev = (e) => {
    e.preventDefault();
    const tl = new TimelineLite();

    if (e.target.dataset.prevSlide == "-1") {
      tl.to(sliderCont.current, time, {
        x: -windowWidth * (elements.length - 1),
      });
    } else {
      tl.to(sliderCont.current, time, {
        x: -windowWidth * e.target.dataset.prevSlide,
      });
    }

    tl.play();
  };

  return (
    <SliderHeroStyle className="slider-container">
      <div className="slider-container__inner" ref={sliderCont}>
        {elements.map((element, i) => {
          const heroImage = getImage(
            element.node.heroHomePage.imagenBanner.localFile.childImageSharp
              .gatsbyImageData
          );
          const tituloBanner = element.node.heroHomePage.tituloBanner;
          const descBanner = element.node.heroHomePage.descripcionBanner;
          const textoBtn = element.node.heroHomePage.textoBotonBanner;

          return (
            <div
              key={i}
              className="slider"
              ref={(ref) => {
                sliderRefs[i] = ref;
              }}
              data-current={i + 1 === 1 ? true : false}
              data-count={i}
            >
              <GatsbyImage image={heroImage} alt={tituloBanner} />
              <FullWidthCont>
                <div className="info-hero-container">
                  <h1>{tituloBanner}</h1>
                  <p>{descBanner}</p>
                  <div className="slider-btns">
                    <Button text={textoBtn} btnClass="primary" />
                    <div className="slider-controls">
                      <button
                        className="btn slider-prev-btn"
                        data-prev-slide={i - 1}
                        onClick={handlePrev}
                      >
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                        Anterior
                      </button>
                      <button
                        className="btn slider-next-btn"
                        data-next-slide={i + 1}
                        onClick={handleNext}
                      >
                        Siguiente
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </button>
                    </div>
                  </div>
                </div>
              </FullWidthCont>
            </div>
          );
        })}
      </div>
    </SliderHeroStyle>
  );
}
