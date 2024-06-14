export const BookCarousel = () => {
  return (
    <div className="container mt-5" style={{ maxWidth: '800px', height: 550 }}>
      <div className="text-center mb-4">
        <h3>Find your next "I stayed up too late reading" book.</h3>
      </div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card mx-auto" style={{ width: '300px' }}>
              <img
                src={require('../../Images/BooksImages/new-book.png')}
                className="card-img-top"
                alt="Book 1"
                style={{ height: '300px' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Book Title 1</h5>
                <p className="card-text">Book Author 1</p>
                <button className="btn btn-primary">Button 1</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card mx-auto" style={{ width: '300px' }}>
              <img
                src={require('../../Images/BooksImages/new-book-1.png')}
                className="card-img-top"
                alt="Book 2"
                style={{ height: '300px' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Book Title 2</h5>
                <p className="card-text">Book Author 2</p>
                <button className="btn btn-primary">Button 2</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card mx-auto" style={{ width: '300px' }}>
              <img
                src={require('../../Images/BooksImages/new-book-2.png')}
                className="card-img-top"
                alt="Book 3"
                style={{ height: '300px' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Book Title 3</h5>
                <p className="card-text">Book Author 3</p>
                <button className="btn btn-primary">Button 3</button>
              </div>
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
        <div className="card mx-auto" style={{ width: '250px' }}>
          <img
            src={require('../../Images/BooksImages/new-book.png')}
            className="card-img-top"
            alt="Book 1"
            style={{ height: '250px' }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">Book Title 1</h5>
            <p className="card-text">Book Author 1</p>
            <button className="btn btn-primary">Button 1</button>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <a href="#" className="btn btn-outline-secondary btn-lg">
          View More
        </a>
      </div>
    </div>
  );
};
