import React from 'react';
import { Link } from 'gatsby';

import LinkListStyle from '../../styles/nav/LinkListStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


const LinkList = ({ open, setOpen }) => {
  return (
    <LinkListStyle open={open} setOpen={setOpen}>
      <li>
        <Link to='/products' onClick={() => setOpen(!open)}>
          Productos
        </Link>
      </li>
      <li>
        <Link to='/recipes' onClick={() => setOpen(!open)}>
          Recetas
        </Link>
      </li>
      <li>
        <Link to='/about' onClick={() => setOpen(!open)}>
          Nosotros
        </Link>
      </li>
      <li>
        <Link to='/contact' onClick={() => setOpen(!open)}>
          Contáctanos
        </Link>
      </li>
      <div className="close-container">
        <FontAwesomeIcon icon={faTimesCircle} onClick={() => setOpen(!open)}/>
      </div>

    </LinkListStyle>
  )
};


export default LinkList;