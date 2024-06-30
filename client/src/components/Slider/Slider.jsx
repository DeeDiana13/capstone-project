import React, { useState } from 'react';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss"

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "https://www.pexels.com/photo/pile-of-books-159866/",
        "https://www.pexels.com/photo/books-in-black-wooden-book-shelf-159711/",
        "https://www.pexels.com/photo/pile-of-assorted-novel-books-694740/",
    ];

const prevslide=()=>{
    setCurrentSlide(currentSlide === 0 ? 2: (prev) => prev -1);
};
const nextslide=()=>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev +1);
};


    return(
        <div className='slider'>Slider
            <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                <img src=data[0] alt="" />
                <img src=data[1] alt="" />
                <img src=data[2] alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevslide}>
                <WestOutlinedIcon/>
                </div>
                <div className="icon" onClic={nextslide}>
                    <EastOutlinedIcon/>
                </div>
            </div>
        </div>
    )
}

export default Slider