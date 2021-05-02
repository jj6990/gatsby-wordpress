import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { TimelineLite, CSSPlugin } from "gsap/all";
import { render } from "react-dom";

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

	imgs.map(img => {
		const imgName = img.node.localFile.childImageSharp.fluid.originalName;
		elements.map((element, i) => {
			const name = element.node.heroHomePage.imagenBanner.localFile.name;
			const mediaExt = element.node.heroHomePage.imagenBanner.localFile.extension;

			if (`${name}.${mediaExt}` === imgName) {
				return img;
			}
		});

	});

	elements.map((element, i) => {
		return element;
	});

	return (
		<div>
			{
				elements.map((element, i) => {
					const heroImage = getImage(imgs[i].node.localFile.childImageSharp.gatsbyImageData);
					return (
					<div key={i} className="hero-component__inner">
						<GatsbyImage image={heroImage} alt={element.node.heroHomePage.tituloBanner} />
						{element.node.heroHomePage.tituloBanner}
					</div>
					)
				})
			}
		</div>
	)

}
