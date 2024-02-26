import React from 'react';
import './Card.css'; // Importing the CSS file for styling

const Card = ({ name, phoneNumber, address, email }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-img-container">
          <img src="https://via.placeholder.com/150" alt="placeholder" className="card-img" />
        </div>
      </div>
      <div className="card-content">
        <h2 className="card-title">Basharul Alam Mazu</h2>
        <ul className="card-details">
          <li><strong>Phone:</strong> +880 1813 890622 </li>
          <li><strong>Address:</strong> Dhaka, Bangldesh</li>
          <li><strong>Email:</strong>basharulalam6@gmail.com</li>
        </ul>
        <a href="#" className="card-btn">Learn More</a>
      </div>
    </div>
  );
}

export default Card;
