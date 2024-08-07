import React from "react";
import "./Categories.scss";
import {Link} from "react-router-dom";

const Categories = () => {
    return(
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img 
                    src="https://www.pexels.com/photo/two-red-and-white-labeled-books-762686/" 
                    alt="" 
                    />
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
                <div className="row">
                <img 
                    src="https://www.pexels.com/photo/two-red-and-white-labeled-books-762686/" 
                    alt="" 
                    />
                    <button>
                    <Link className="link" to="/products/1">English Books</Link>
                    </button> 
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img 
                    src="https://www.pexels.com/photo/two-red-and-white-labeled-books-762686/" 
                    alt="" 
                    />
                    <button>
                    <Link className="link" to="/products/1">Chinese Books</Link>
                    </button> 
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                        <img 
                            src="https://www.pexels.com/photo/two-red-and-white-labeled-books-762686/" 
                            alt="" 
                        />
                        <button>
                        <Link className="link" to="/products/1">Malay Books</Link>
                        </button> 
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                        <img 
                            src="https://www.pexels.com/photo/two-red-and-white-labeled-books-762686/" 
                            alt="" 
                        />
                        <button>
                        <Link className="link" to="/products/1">New Arrivals Books</Link>
                        </button> 
                        </div>
                    </div>
                </div>
                <div className="row">
                <img 
                    src="https://www.pexels.com/photo/two-red-and-white-labeled-books-762686/" 
                    alt="" 
                />
                <button>
                <Link className="link" to="/products/1">Seasonal Books</Link>
                </button> 
                </div>
            </div>
        </div>
    )
}

export default Categories