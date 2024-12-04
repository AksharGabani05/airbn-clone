import React, { useState } from "react";
import "./styles.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

function Card({ card }) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const [showDonePopup, setShowDonePopup] = useState(false);

  const handleImageClick = () => {
    setSelectedHotel(card);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedHotel(null);
  };

  const handleBookingNow = () => {
    setShowBookingForm(true);
  };

  const handleCloseForm = () => {
    setShowBookingForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); 

    
    setShowPopup(false);

    setTimeout(() => {
      setIsLoading(false); 
      setShowDonePopup(true); 
    }, 2000); 
  };

  const handleCloseDonePopup = () => {
    setShowDonePopup(false);
    setShowBookingForm(false); 
  };

  return (
    <>
      <div className="card-box">
      
        <img
          src={card.imgSrc}
          className="card-img"
          onClick={handleImageClick}
          alt={`Hotel`}
          style={{ cursor: "pointer" }}
        />
        <div className="card-info-flex">
          <h3 className="card-title">{card.title}</h3>
          <div className="card-rating">
            <StarRateRoundedIcon />
            <p>{card.rating}</p>
          </div>
        </div>
        <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.desc}</p>
        <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.date}</p>
        <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black)" }}>
          <span style={{ fontWeight: "600" }}>₹{card.price}</span> per night
        </p>

     
        {showPopup && selectedHotel && (
          <div className="popup-overlay" onClick={handleClosePopup}>
            <div className="popup-box" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={handleClosePopup}>
                &times;
              </button>
              <h2>{selectedHotel.title}</h2>
              <img
                src={selectedHotel.imgSrc[0]}
                className="popup-img"
                alt={`Popup hotel`}
              />
              <div className="popup-info">
                <p>{selectedHotel.desc}</p>
                <p>Date: {selectedHotel.date}</p>
                <p>
                  Price: <strong>₹{selectedHotel.price}</strong> per night
                </p>
                <div className="popup-rating">
                  <StarRateRoundedIcon />
                  <span>{selectedHotel.rating}</span>
                </div>
                <br />
                <button className="add-to-cart-btn" onClick={handleBookingNow}>
                  Booking Now
                </button>
              </div>
            </div>
          </div>
        )}

       
        {showBookingForm && selectedHotel && (
          <div className="booking-form-overlay">
            <div className="booking-form">
              <h2>Enter Your Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Your Phone"
                    required
                  />
                </div>
               
                <div className="form-group">
                  <h3>Selected Hotel</h3>
                  <img
                    src={selectedHotel.imgSrc[0]}
                    alt="Selected Hotel"
                    className="selected-hotel-img"
                  />
                  <p>Price: ₹{selectedHotel.price} per night</p>
                </div>
                <div className="form-group">
                  <button type="submit" className="submit-btn" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
              <button className="close-btn" onClick={handleCloseForm}>
                &times;
              </button>
            </div>
          </div>
        )}

        
        {showDonePopup && (
          <div className="done-popup-overlay">
            <div className="done-popup">
              <h3>Booking Complete!</h3>
              <p>Your booking has been successfully submitted.</p>
              <button className="close-btn" onClick={handleCloseDonePopup}>
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
