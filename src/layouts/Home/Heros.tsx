import React from 'react';

export const Heros = () => {
    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-5">
                    {/* First Hero Section */}
                    <div className="col-md-6 d-flex align-items-center" style={{ backgroundImage: 'url(/Images/PublicImages/image-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '400px' }}>
                        <div></div>
                    </div>
                    <div className="col-md-6 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>What have you been reading?</h1>
                            <p className="lead">
                                The library team would love to know what you have been reading.
                                Whether it is to learn a new skill or grow within one,
                                we will be able to provide the top content for you.
                            </p>
                            <a className="btn main-color btn-lg text-white" href="#">Sign Up</a>
                        </div>
                    </div>
                </div>

                <div className="row g-0 mt-5">
                    {/* Second Hero Section */}
                    <div className="col-md-6 order-md-2 d-flex align-items-center" style={{ backgroundImage: 'url(/Images/PublicImages/image-2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '400px' }}>
                        <div></div>
                    </div>
                    <div className="col-md-6 container d-flex justify-content-center align-items-center order-md-1">
                        <div className="ml-2">
                            <h1>Discover New Books</h1>
                            <p className="lead">
                                Explore a wide variety of new books and authors that we have added
                                to our collection. Expand your horizons with our recommendations.
                            </p>
                            <a className="btn main-color btn-lg text-white" href="#">Explore Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}