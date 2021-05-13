import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import CategorySliderStyle from '../../styles/categorySlider/CategorySliderStyle'
import FullWidthCont from '../../styles/containers/FullWidthCont'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

export default function CategorySlider() {
    const data = useStaticQuery(graphql`
    query  {
        allWpProductCategory {
            edges {
              node {
                name
                link
                image {
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
  `)

    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    const categories = data.allWpProductCategory.edges;

    return (
        <CategorySliderStyle>
            <FullWidthCont>
                <div className="title-container">
                    <h2>Categoria de Productos</h2>
                </div>
                <div className="swiper-container" >
                    <Swiper spaceBetween={10}
                        slidesPerView={5}
                        scrollbar={{ draggable: true }} className='swiper-wrapper'>
                        <SwiperSlide className="utility-card swiper-slide">
                            <div className="card-title-container">
                                <h3>Tenemos todo lo que necesitas para tu hogar</h3>
                            </div>
                            <div className="arrow-container">
                                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                            </div>
                        </SwiperSlide>
                        {categories.map((category, i) => {
                            if (category.node.image) {
                                const categoryImage = getImage(category.node.image.localFile.childImageSharp.gatsbyImageData);
                                return (
                                    <SwiperSlide key={i} className='swiper-slide'>
                                        <GatsbyImage image={categoryImage} alt={category.node.name} />
                                        <div className="link-container">
                                            <Link className="link-button" to={category.node.link}>{category.node.name}</Link>
                                        </div>
                                    </SwiperSlide>
                                )
                            } else {
                                return false;
                            }
                        }
                        )
                        }
                    </Swiper>
                </div>
            </FullWidthCont>
        </CategorySliderStyle>
    )

}