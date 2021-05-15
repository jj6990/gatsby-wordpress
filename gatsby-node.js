const path = require(`path`);

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*";
    createPage(page);
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      wpMenu(name: { eq: "Menu 1" }) {
        menuItems {
          nodes {
            label
            path
            parentId
            id
            childItems {
              nodes {
                id
                label
              }
            }
          }
        }
      }
    }
  `);

  result.data.wpMenu.menuItems.nodes.forEach((node) => {
    console.log(node);
    let pageName = "";

    if (node.parentId) {
      if (node.childItems.nodes.length) {
        pageName = "categoria";
      } else {
        pageName = "subcategoria";
      }
    } else {
      pageName = node.path.replace(/\//g, "");
    }

    console.log(pageName);
    createPage({
      path: node.path,
      component: path.resolve(`./src/templates/${pageName}.js`),
      context: {
        label: node.label,
        parentId: node.parentId ? node.parentId : null,
        id: node.parentId ? node.id : null,
        childItems: node.childItems ? node.childItems : null,
      },
    });
  });

  const productPages = await graphql(`
    query {
      allWpProduct {
        edges {
          node {
            link
            ... on WpSimpleProduct {
              id
              name
              regularPrice
              salePrice
              onSale
              description
              productCategories {
                nodes {
                  name
                }
              }
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              galleryImages {
                nodes {
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
    }
  `);

  productPages.data.allWpProduct.edges.forEach(({ node }) => {
    console.log(node);

    createPage({
      path: node.link,
      component: path.resolve(`./src/templates/producto.js`),
      context: {
        data: node,
      },
    });
  });
};
