import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { TimelineLite, CSSPlugin } from "gsap/all";

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
                  localFile {
                    name
                    extension
                  }
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


    console.log(elements);
    const sliders = elements.map((element, i) => {
        const img = imgs.filter(img => {
            console.log(`${element.node.heroHomePage.imagenBanner.localFile.name}.${element.node.heroHomePage.imagenBanner.localFile.extension}`, img.node.localFile.childImageSharp.fluid.originalName);
            if (`${element.node.heroHomePage.imagenBanner.localFile.name}.${element.node.heroHomePage.imagenBanner.localFile.extension}` === img.node.localFile.childImageSharp.fluid.originalName) {
                console.log(img);
                return img;
            }
        });
        console.log(img);

        if (img[i]) {
            const heroImage = getImage(img[i].node.localFile.childImageSharp.gatsbyImageData);

            return (
                <div key={i} className="hero-component__inner">
                    <GatsbyImage image={heroImage} alt={element.node.heroHomePage.tituloBanner} />
                    {element.node.heroHomePage.tituloBanner}
                </div>
            )
        }
    });


    return (
        <div className="hero-component">
            {sliders}
        </div>
    )
}
