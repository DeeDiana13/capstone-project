import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Link} from "react-router-dom"
import "./Navbar.scss"

const Navbar = () => {

  const[open,setOpen] = useState(false)

  return (
    <div className= 'navbar'>
      <div className="wrapper">
        <div className= "left"></div>
          <div className="item">
            <img src="/img/sg.png" alt=""  />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>SGD</span>
            <KeyboardArrowDownIcon/>>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">English Books</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Chinese Books</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Malay Books</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/4">New Arrivals</Link>
          </div>
        <div className= "center">
          <Link className="link" to="/">ZENITH</Link>
        </div>
        <div className= "right">
            <div className= "item">
              <Link className="link" to="/">Home</Link>
            </div>
            <div className= "item">
              <Link className="link" to="/">About</Link>
            </div>
            <div className= "item">
              <Link className="link" to="/">Contact</Link>
            </div>
            <div className= "item">
              <Link className="link" to="/">Stores</Link>
            </div>
            <div className="icons">
              <SearchIcon/>
              <PersonOutlineOutlinedIcon/>
              <FavoriteBorderOutlinedIcon/>
              <div className="cartIcon" onClick={() => setOpen (!open)}>
                <ShoppingCartOutlinedIcon/>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
        {open && <Cart/>}
    </div>

  );
};

export default Navbar
