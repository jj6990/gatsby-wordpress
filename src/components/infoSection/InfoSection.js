import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import InfoSectionStyle from '../../styles/InfoSection/InfoSectionStyle'
import FullWidthCont from '../../styles/containers/FullWidthCont'
import Button from '../globals/Button'


export default function InfoSection() {
    const data = useStaticQuery(graphql`
    query {
        wpInfosection {
          infosection {
            titulo
            textoDelBoton
            descripcion
          }
        }
      }
  `)

  console.log(data);
    return (
        <InfoSectionStyle>
            <FullWidthCont>
                <div className="info-section-container">
                    <div className="info-section-content">
                        <div className="info-section-title-container">
                            <h3>{data.wpInfosection.infosection.titulo}</h3>
                        </div>
                        <div className="info-section-paragraph-container">
                            <p>{data.wpInfosection.infosection.descripcion}</p>
                        </div>
                        <div className="info-section-btn-container">
                            <Button text={data.wpInfosection.infosection.textoDelBoton} btnClass="primary" />
                        </div>
                    </div>
                    <div className="info-section-gallery">
                    
                    </div>
                </div>
            </FullWidthCont>
        </InfoSectionStyle>
    );
}