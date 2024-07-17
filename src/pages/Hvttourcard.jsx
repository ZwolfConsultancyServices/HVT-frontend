import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ComponentCss/Hvttourcard.css';
import tours from "../Data/data.js";

const Hvttourcard = () => {
 
  const displayedTours = tours.slice(0, 6);

  return (
    <section className="bg-light mt-4 p-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center pb-3">
            <h2 className="fw-bold fs-1">
              Our 
              <span className="main-hover"> Destinations </span>
            </h2>
          </div>
        </div>
        <div className="row" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
          {displayedTours.map((tour, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
              <Card className="h-100">
                <Card.Img variant="top" src={tour.imgSrc} className="card-img-top" />
                <Card.Body className="card-body d-flex flex-column">
                  <Card.Title className="card-title text-center">{tour.title}</Card.Title>
                  <div className="d-flex justify-content-center mt-auto">
                    <Link to={`/tour/${tour.id}`}>
                      <Button variant="primary" className="explore-btn">EXPLORE</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hvttourcard;
