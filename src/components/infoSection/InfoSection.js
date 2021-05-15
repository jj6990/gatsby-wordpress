import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import InfoSectionStyle from "../../styles/InfoSection/InfoSectionStyle";
import FullWidthCont from "../../styles/containers/FullWidthCont";
import Button from "../globals/Button";
import Gallery from "../gallery/Gallery";

export default function InfoSection() {
  const data = useStaticQuery(graphql`
    query {
      wpInfosection {
        infosection {
          titulo
          textoDelBoton
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
      allWpGalleryPhoto {
        edges {
          node {
            galleryphotos {
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
  console.log(data);

  const featuredImage = getImage(
    data.wpInfosection.infosection.imagen.localFile.childImageSharp
      .gatsbyImageData
  );

  return (
    <FullWidthCont>
      <InfoSectionStyle>
        <div className="info-section-content">
          <div className="info-section-title-container">
            <h3>{data.wpInfosection.infosection.titulo}</h3>
          </div>
          <div className="info-section-image-container">
            <GatsbyImage
              image={featuredImage}
              alt={data.wpInfosection.infosection.titulo}
            />
          </div>
          <div className="info-section-paragraph-container">
            <p>{data.wpInfosection.infosection.descripcion}</p>
          </div>
          <div className="info-section-btn-container">
            <Button
              text={data.wpInfosection.infosection.textoDelBoton}
              btnClass="primary"
            />
          </div>
        </div>
        <Gallery data={data.allWpGalleryPhoto.edges} />
      </InfoSectionStyle>
    </FullWidthCont>
  );
}
