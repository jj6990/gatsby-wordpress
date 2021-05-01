import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Hero() {
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
                            title       
                        }
                    }
                }
            }
        }
        allWpMediaItem {
            edges {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                    fluid {
                      originalName
                    }
                  }
                }
              }
            }
        }
    }
  `)

    const elements = data.allWpBanner.edges;
    const imgs = data.allWpMediaItem.edges;

    const sliders = elements.map((element, i) => {
        const img = imgs.filter(img => {
            if (`${element.node.heroHomePage.imagenBanner.title}.png` === img.node.localFile.childImageSharp.fluid.originalName) {
                return img;
            }
        });

        const heroImage = getImage(img.node.localFile.childImageSharp.gatsbyImageData);
        console.log(img);

        return (
            <div key={i} className="hero-component__inner">
                <GatsbyImage image={heroImage} alt={element.node.heroHomePage.tituloBanner} />
                {element.node.heroHomePage.tituloBanner}
            </div>
        )
    });

    return (
        <div className="hero-component">
            {sliders}
        </div>
    )
}
