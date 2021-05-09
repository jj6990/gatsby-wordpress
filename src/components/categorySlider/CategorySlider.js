import React, { createRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

import CategorySliderStyle from '../../styles/categorySlider/CategorySliderStyle'
import FullWidthCont from '../../styles/containers/FullWidthCont'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

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

    console.log(data);
    const categories = data.allWpProductCategory.edges;

    return (
        <CategorySliderStyle>
            <FullWidthCont>
                <div className="title-container">
                    <h2>Categoria de Productos</h2>
                </div>
                <div className="category-cards-container">
                    <div className="card-container utility-card">
                        <div className="card-title-container">
                            <h3>Tenemos todo lo que necesitas para tu hogar</h3>
                        </div>
                        <div className="arrow-container">
                            <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </div>
                    </div>
                    {categories.map((category, i) => {
                        console.log(category);
                        if (category.node.image) {
                            const categoryImage = getImage(category.node.image.localFile.childImageSharp.gatsbyImageData);
                            return (
                                <div key={i} className="card-container">
                                    <GatsbyImage image={categoryImage} alt={category.node.name} />
                                    <div className="link-container">
                                        <Link className="link-button" to={category.node.link}>{category.node.name}</Link>
                                    </div>
                                </div>
                            )
                        } else {
                            return false;
                        }
                    }
                    )
                    }

                </div>
            </FullWidthCont>
        </CategorySliderStyle>
    )

}