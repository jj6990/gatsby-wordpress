import React, { useState } from 'react';
import { Link } from 'gatsby';
import NavStyle from '../styles/nav/NavStyle';
import logoW from '../assets/images/logoWarenhaus.png';
import AccountNav from './nav/AccountNav';
import LinkList from './nav/LinkList';
import Search from './nav/Search';


export default function Nav(props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavStyle className='container'>
        <div className='top-nav'>
          <div className='logo-container'>
            <Link to='/'>
              <img src={logoW} alt='logo' />
            </Link>
          </div>
          <Search />
          <AccountNav open={open} setOpen={setOpen} />
        </div>
        <div className="bottom-nav">
          <LinkList open={open} setOpen={setOpen} />
        </div>
      </NavStyle>
    </>
  );
}

