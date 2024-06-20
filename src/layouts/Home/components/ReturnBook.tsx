import React from 'react';

export const ReturnBook = () => {
    return (
        <div className="card mx-2 shadow-sm" style={{ width: '12rem' }}>
            <img
                src={require('../../../Images/BooksImages/new-book.png')}
                className="card-img-top"
                alt="Book"
                style={{ height: '250px', objectFit: 'cover' }}
            />
            <div className="card-body text-center">
                <h5 className="card-title">Book Title 1</h5>
                <p className="card-text">Book Author 1</p>
                <button className="btn btn-primary">Read More</button>
            </div>
        </div>
    );
}
