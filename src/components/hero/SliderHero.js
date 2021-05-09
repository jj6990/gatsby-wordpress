import React, { createRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { TimelineLite, gsap } from "gsap/all";

import Button from '../globals/Button';

import SliderHeroStyle from '../../styles/slider/SliderHeroStyle'
import FullWidthCont from '../../styles/containers/FullWidthCont'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { TweenLite } from "gsap";

export default function SliderHero() {
  const data = useStaticQuery(graphql`
  query getBannerData {
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
  `)

  const elements = data.allWpBanner.edges;
  const sliderRefs = {}
  const sliderCont = createRef(null);
  const time = .5;

  gsap.registerPlugin(TweenLite);

  const handleNext = (e) => {
    e.preventDefault();
    const tl = new TimelineLite();

    if (e.target.dataset.nextSlide == elements.length) {
      tl.to(sliderCont.current, time, { x: 0 });
    }
    else {
      tl.to(sliderCont.current, time, { x: -window.innerWidth * e.target.dataset.nextSlide });
    }

    tl.play();
  }

  const handlePrev = (e) => {
    e.preventDefault();
    const tl = new TimelineLite();

    if (e.target.dataset.prevSlide == "-1") {
      tl.to(sliderCont.current, time, { x: -window.innerWidth * (elements.length - 1) });
    } else {
      tl.to(sliderCont.current, time, { x: -window.innerWidth * e.target.dataset.prevSlide });
    }

    tl.play();
  }

  return (
    <SliderHeroStyle className="slider-container" ref={sliderCont}>
      {
        elements.map((element, i) => {
          const heroImage = getImage(element.node.heroHomePage.imagenBanner.localFile.childImageSharp.gatsbyImageData);
          const tituloBanner = element.node.heroHomePage.tituloBanner;
          const descBanner = element.node.heroHomePage.descripcionBanner;
          const textoBtn = element.node.heroHomePage.textoBotonBanner;

          return (
            <div key={i} className="slider" ref={(ref) => { sliderRefs[i] = ref }}>
              <GatsbyImage image={heroImage} alt={tituloBanner} />
              <FullWidthCont>
                <div className="info-hero-container">
                  <h1>{tituloBanner}</h1>
                  <p>{descBanner}</p>
                  <div className="slider-btns">
                    <Button text={textoBtn} btnClass="primary" />

                    <div className="slider-controls">
                      <button className="slider-prev-btn" data-prev-slide={i - 1} onClick={handlePrev}>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                        Anterior
                      </button>
                      <button className="slider-next-btn" data-next-slide={i + 1} onClick={handleNext}>
                        Siguiente
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </button>
                    </div>
                  </div>
                </div>
              </FullWidthCont>
            </div>
          )
        })
      }
    </SliderHeroStyle>
  )

}
