import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () => {

    const data = [
        {
            id:1,
            img: "https://www.pexels.com/photo/close-up-of-paper-over-white-background-256450/",
            title: "Book 1",
            isNew: true,
            oldPrice: 30,
            price: 20,
        },
        {
            id:2,
            img: "https://www.pexels.com/photo/close-up-of-paper-over-white-background-256450/",
            title: "Book 2",
            isNew: true,
            oldPrice: 30,
            price: 20,
        },
        {
            id:3,
            img: "https://www.pexels.com/photo/close-up-of-paper-over-white-background-256450/",
            title: "Book 3",
            isNew: true,
            oldPrice: 30,
            price: 20,
        },
        {
            id:4,
            img: "https://www.pexels.com/photo/close-up-of-paper-over-white-background-256450/",
            title: "Book 4",
            isNew: true,
            oldPrice: 30,
            price: 20,
        },
    ];

    return (
        <div className='list'>{data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}</div>
    )
}

export default List