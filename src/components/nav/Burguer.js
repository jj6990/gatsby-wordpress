import React from 'react';
import BurguerStyle from '../../styles/nav/BurguerStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Burguer = ({ open, setOpen }) => (
  <BurguerStyle open={open} onClick={() => setOpen(!open)}>
    <FontAwesomeIcon icon={faBars} />
  </BurguerStyle>
);

export default Burguer;
