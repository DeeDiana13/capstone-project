import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

const data = [
    {
        id:1,
        img: "https://www.pexels.com/photo/close-up-of-paper-over-white-background-256450/",
        title: "Book 1",
        desc: "Book 1",
        isNew: true,
        oldPrice: 30,
        price: 20,
    },
    {
        id:2,
        img: "https://www.pexels.com/photo/close-up-of-paper-over-white-background-256450/",
        title: "Book 2",
        desc: "Book 2",
        isNew: true,
        oldPrice: 30,
        price: 20,
    },
];

    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {data?.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className="price">1 x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className="delete"/>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$100</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">Reset Cart</span>
        </div>
    )
}

export default Cart