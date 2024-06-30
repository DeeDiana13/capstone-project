import React from "react";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img: "",
            title: "",
            isNew: true,
            oldPrice: 30,
            price: 20,
        },
        {
            id: 2,
            img: "",
            title: "",
            isNew: true,
            oldPrice: 30,
            price: 20,
        },
        {
            id: 3,
            img: "",
            img2: "",
            title: "",
            isNew: true,
            oldPrice: 30,
            price: 20,
        },
        {
            id: 4,
            img: "",
            img2: "",
            title: "",
            isNew: true,
            oldPrice: 30,
            price: 20,
        },
    ]

    return (
        <div className='featuredProducts'>

            <div className="top">
                <h1>{type} products</h1>
                <p>
                Lorem ipsum dolor sit amet. In laborum odio in cumque quia nam consequuntur harum in harum deserunt eum recusandae maxime. Non distinctio ipsa nam deleniti eaque rem dolore quas cum voluptatum consectetur quo sint dolorem ut consequuntur saepe cum earum labore.Vel animi quia ut nulla quia eum dolorem rerum et quae vero. Qui omnis ducimus eum eveniet similique et eveniet.
                </p>
            </div>
            <div className="bottom">
                {data.map(item=>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts