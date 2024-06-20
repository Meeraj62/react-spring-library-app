import React from 'react';
import { ReturnBook } from './ReturnBook';

export const BookCarousel = () => {
  return (
    <div className="container mt-5" style={{ maxWidth: '1000px' }}>
      <div className="text-center mb-4">
        <h3>Find your next "I stayed up too late reading" book.</h3>
      </div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-around">
              <ReturnBook />
              <ReturnBook />
              <ReturnBook />
            </div>
          </div>

          <div className="carousel-item">
            <div className="d-flex justify-content-around">
              <ReturnBook />
              <ReturnBook />
              <ReturnBook />
            </div>
          </div>

          <div className="carousel-item">
            <div className="d-flex justify-content-around">
              <ReturnBook />
              <ReturnBook />
              <ReturnBook />
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Mobile */}
      <div className="d-lg-none mt-3">
        <ReturnBook />
      </div>

      <div className="text-center mt-3">
        <a href="#" className="btn btn-outline-secondary btn-lg">
          View More
        </a>
      </div>
    </div>
  );
}