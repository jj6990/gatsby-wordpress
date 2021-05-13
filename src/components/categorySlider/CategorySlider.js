import React, { useLayoutEffect, useState } from "react"
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
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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

    const [windowWidth, setWindowWidth] = useState(0);
    const categories = data.allWpProductCategory.edges;

    useLayoutEffect(() => {
        function updateSize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);

    }, [])

    const slices = () => {
        if (windowWidth > 1024) {
            return 5;
        } else if (windowWidth > 768) {
            return 3;
        } else {
            return 2;
        }
    }
    console.log(slices());

    const categoryCards = categories.map((category, i) => {
        if (category.node.image) {
            const categoryImage = getImage(category.node.image.localFile.childImageSharp.gatsbyImageData);
            return (
                <SwiperSlide key={i} className='card-container'>
                    <GatsbyImage image={categoryImage} alt={category.node.name} />
                    <div className="link-container">
                        <Link className="link-button" to={category.node.link}>{category.node.name}</Link>
                    </div>
                </SwiperSlide>
            )
        } else {
            return false;
        }
    })


    return (
        <CategorySliderStyle>
            <FullWidthCont>
                <div className="title-container">
                    <h2>Categoria de Productos</h2>
                </div>
                <div className="swiper-container" >
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={slices()}
                        scrollbar={{ draggable: true }}
                        className='swiper-wrapper'>

                        <SwiperSlide className="utility-card">
                            <div className="card-title-container">
                                <h3>Tenemos todo lo que necesitas para tu hogar</h3>
                            </div>
                            <div className="arrow-container">
                                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                            </div>
                        </SwiperSlide>

                        {categoryCards}
                    </Swiper>
                </div>
            </FullWidthCont>
        </CategorySliderStyle>
    )

}