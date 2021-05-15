import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Gallery(props) {
  const images = props.data;

  return (
    <div className="info-section-gallery">
      <div className="info-section-gallery__inner">
        {images.map((element, i) => {
          const photo = getImage(
            element.node.galleryphotos.imagen.localFile.childImageSharp
              .gatsbyImageData
          );

          const description = element.node.galleryphotos.descripcion;

          return (
            <div key={i} className={"gallery-photo photo--" + (i + 1)}>
              <GatsbyImage image={photo} alt={description} className="gallery-img-wrapper" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
