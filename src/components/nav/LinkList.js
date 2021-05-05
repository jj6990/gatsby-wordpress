import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby"

import LinkListStyle from '../../styles/nav/LinkListStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


export default function LinkList({ open, setOpen }) {
  const data = useStaticQuery(graphql`
    query MenuItems {
      wpMenu(name: {eq: "Menu 1"}) {
        menuItems {
          nodes {
            label
            path
            parentId
            id
          }
        }
      }
    }
  `)

  const menuItems = data.wpMenu.menuItems.nodes;

  return (
    <LinkListStyle open={open} setOpen={setOpen}>
      {menuItems.map((item, i) => {
        if (item.parentId === null) {
          return (
            <li key={i}>
              <Link to={item.path} onClick={() => setOpen(!open)}>
                {item.label}
              </Link>
            </li>
          )
        }else {
          return
        }
      })}
      <div className="close-container">
        <FontAwesomeIcon icon={faTimesCircle} onClick={() => setOpen(!open)} />
      </div>

    </LinkListStyle>
  )
};
