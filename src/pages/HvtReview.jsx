import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../pagesCss/HvtReview.css';

const HvtReview = () => {
  const testimonials = [
    {
      name: 'John Doe',
      text: 'This is a great service!',
      imgSrc: '/images/men1.jpeg',
      designation: ''
    },
    {
      name: 'Jane Smith',
      text: 'Amazing experience!',
      imgSrc: '/images/men2.jpeg',
      designation: ''
    },
    {
      name: 'Mike Johnson',
      text: 'Very satisfied with the service provided.',
      imgSrc: '/images/men1.jpeg',
      designation: ''
    },
    {
      name: 'Emily Davis',
      text: 'Top-notch customer service and great value.',
      imgSrc: '/images/girl.jpeg',
      designation: ''
    },
    {
      name: 'William Brown',
      text: 'Exceeded my expectations in every way.',
      imgSrc: '/images/men2.jpeg',
      designation: ''
    }
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className='bg-light'>
      <Container className="my-5 p-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="fw-bold">
              What Our <span className="main-hover">Clients Say</span>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={10} className="px-2">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                  <Card className="testimonial-card">
                    <Card.Body className="d-flex flex-column align-items-center">
                      <img
                        src={testimonial.imgSrc}
                        className="rounded-circle mb-3 testimonial-img"
                        alt={testimonial.name}
                      />
                      <Card.Text className="text-center testimonial-text">
                        "{testimonial.text}"
                      </Card.Text>
                      <Card.Title className="mt-3 testimonial-name">{testimonial.name}</Card.Title>
                      <Card.Subtitle className="text-muted testimonial-designation">{testimonial.designation}</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HvtReview;
