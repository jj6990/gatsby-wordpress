import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Typography from '../styles/Typography';
import GlobalStyles from '../styles/GlobalStyles';
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet"

import 'normalize.css';

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
         query LayoutQuery {
           site {
             siteMetadata {
               title
             }
           }
         }
       `}
      render={data => (
        <>
          <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title} />
          <div>
            <GlobalStyles />
            <Typography />
            <Nav layoutData={data} />
            {children}
            <Footer layoutData={data} />
          </div>
        </>
      )}
    />
  );
}
