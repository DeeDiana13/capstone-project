import React, { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {

  const [selectedImg,setSelectedImg] = useState(0);
  const [quantity,setQuantity] = useState(1);


  const images = [
    "https://www.pexels.com/photo/pages-on-an-opened-book-415071/",
    "https://www.pexels.com/photo/pages-on-an-opened-book-415071/",
  ];

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className='mainImg'>
        <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$50</span>
        <p>Lorem ipsum dolor sit amet. Est omnis debitis ab quos galisum vel labore nulla. Est consequatur deserunt qui galisum repellat sed expedita magni et perferendis neque.</p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => prev ===1 ? 1 : prev - 1 )}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
          <FavoriteBorderIcon/> ADD TO WISHLIST
          </div>
          <div className="item"> ADD TO COMPARE
          <BalanceIcon/>
          </div>
        </div>
        <div className="info">
          <span>Vendor: </span>
          <span>Product Type: </span>
          <span>Tag: </span>
        </div>
        <hr/>
        <div className="info">
          <span>DESCRIPTION</span>
          <hr/>
          <span>ADDITIONAL INFORMATION</span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product
