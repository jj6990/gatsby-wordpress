import React, { useContext } from 'react';
import { Link } from 'gatsby';
import AuthContext from '../../context/auth/authContext'
import Burguer from './Burguer';
import CartIcon from '../../assets/images/icons/cart-icon.svg';

import AccountNavStyle from '../../styles/nav/AccountNavStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faAddressCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const AccountNav = ({ open, setOpen }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, username } = authContext;

  const handleLogout = () => {
    logout();
  }

  return (
    <AccountNavStyle>
      {isAuthenticated ? (
        <ul>
          <li><Link to='/app/profile'> Hola, {username}</Link></li>
          <li><a onClick={handleLogout} href='#'>Salir<FontAwesomeIcon icon={faSignOutAlt} /></a></li>
        </ul>

      ) : (
        <ul>
          <li>
            <Link to='/app/login'>
              Ingresar
              <FontAwesomeIcon icon={faSignInAlt} />
            </Link>
          </li>
          <li>
            <Link to='/app/register'>
              Registrarse
              <FontAwesomeIcon icon={faAddressCard} />
            </Link>
          </li>
        </ul>
      )}
      <div className="cart-burguer-container">
        <div className='cart-container'>
          <CartIcon />
          <span className='count-cart'>0</span>
        </div>
        <Burguer open={open} setOpen={setOpen} />
      </div>
    </AccountNavStyle>
  )
};

export default AccountNav;
