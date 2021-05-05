const path = require(`path`)
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/app/)) {
        page.matchPath = "/app/*"
        // Update the page.
        createPage(page)
    }



}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
    query {
        wpMenu(name: {eq: "Menu 1"}) {
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
  `)

    result.data.wpMenu.menuItems.nodes.forEach(node => {
        console.log(node);
        let pageName = '';

        if (node.parentId) {
            if (node.childItems.nodes.length) {
                pageName = "categoria";
            } else {
                pageName = "subcategoria";
            }
        } else {
            pageName = node.path.replace(/\//g, '');
        }

        console.log(pageName);
        createPage({
            path: node.path,
            component: path.resolve(`./src/templates/${pageName}.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                label: node.label,
                parentId: node.parentId ? node.parentId : null,
                id: node.parentId ? node.id : null,
                childItems: node.childItems ? node.childItems : null,
            },
        })
    })
}