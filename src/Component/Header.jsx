import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom";
import React from 'react';

function Header() {
  return (
    <header  className='containerr'>
        <div className='logo'>
          <img src={require('../image/logo.png')}/>
        </div>
        <div className='main-menu'>
          <div className='menu-text'>
            <ul>
              <li><Link to='/'>Home</Link> <IoIosArrowDown className='icon-menu'/></li>
              <li><Link to='Pages'>Pages</Link> <IoIosArrowDown className='icon-menu'/></li>
              <li><Link to='Elements'>Elements</Link> <IoIosArrowDown className='icon-menu'/></li>
              <li><Link to='Portfolio'>Portfolio</Link> <IoIosArrowDown className='icon-menu'/></li>
              <li><Link to='Blog'>Blog</Link> <IoIosArrowDown className='icon-menu'/></li>
              <li><Link to='Shop'>Shop</Link><IoIosArrowDown className='icon-menu'/></li>
            </ul>
          </div>
          <div className='side-menu'>
            <ul>
              <li><a href='#'><FaSearch className='icon-side'/> Search</a></li>
              <li><a href='#'><FaShoppingCart className='icon-side'/> Cart</a></li>
              <li><a href='#' className='english'>Eng <IoIosArrowDown className='icon-side-menu'/></a></li>
            </ul>
          </div>
        </div>
    </header>
  )
}

export default Header