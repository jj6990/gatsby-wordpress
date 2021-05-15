import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import FeaturedProductsStyle from "../featuredProducts/FeaturedProductsStyle";
import FullWidthCont from "../containers/FullWidthCont";

export default function InfoSection() {
  const data = useStaticQuery(graphql`
    query FeaturedProducts {
      allWpProduct(
        filter: {
          productCategories: {
            nodes: { elemMatch: { name: { eq: "Productos Recomendados" } } }
          }
        }
      ) {
        edges {
          node {
            link
            ... on WpSimpleProduct {
              id
              name
              regularPrice
              onSale
              salePrice
            }
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <FullWidthCont>
      <FeaturedProductsStyle>
        <div className="featured-products"></div>
      </FeaturedProductsStyle>
    </FullWidthCont>
  );
}
