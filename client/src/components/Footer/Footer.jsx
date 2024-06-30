import React from 'react'
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>English Books</span>
          <span>Chinese Books</span>
          <span>Malay Books</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Lorem ipsum dolor sit amet. Qui perspiciatis delectus rem obcaecati ipsum cum deserunt aliquam eum voluptates quod sit debitis voluptatem et earum voluptatibus ut ratione quaerat. Sed obcaecati iure qui officia modi aut sunt sint et inventore iste est rerum commodi et odit fugit. Ut nesciunt voluptate qui odit unde et magnam minima. Ad rerum sint et amet excepturi et delectus autem eum recusandae incidunt in possimus autem qui maxime nihil eum doloribus aperiam.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          Lorem ipsum dolor sit amet. Qui perspiciatis delectus rem obcaecati ipsum cum deserunt aliquam eum voluptates quod sit debitis voluptatem et earum voluptatibus ut ratione quaerat. Sed obcaecati iure qui officia modi aut sunt sint et inventore iste est rerum commodi et odit fugit. Ut nesciunt voluptate qui odit unde et magnam minima. Ad rerum sint et amet excepturi et delectus autem eum recusandae incidunt in possimus autem qui maxime nihil eum doloribus aperiam.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="Logo">ZENITH</span>
          <span className="copyright">© Copyright 2024. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
