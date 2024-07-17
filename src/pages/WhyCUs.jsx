import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../pagesCss/WhyCUs.css'

const details = [
  {
    title: "Experienced Team",
    detail: "Our enthusiastic and experienced team is committed to ensuring a dream travel experience for all our guests."
  },
  {
    title: "Customized Itineraries",
    detail: "Based on individual needs, we weave customized itineraries that cater specifically to your preferences and requirements."
  },
  {
    title: "Comprehensive Support",
    detail: "We offer support throughout the travel process, ensuring all your needs are met and any concerns are addressed promptly."
  },
  {
    title: "Variety of Packages",
    detail: "Our wide range of specialized travel packages caters to different interests and demographics, ensuring there’s something for everyone."
  },
  {
    title: "Customer Satisfaction",
    detail: "We focus on providing exclusive attention and care to each traveler, making your journey enjoyable and memorable."
  },
  {
    title: "Best Prices",
    detail: "We offer the best prices anytime. At Swan Tours, we believe every travel plan should be perfect, and we meticulously handle all aspects of travel, from the simplest details to the most significant elements."
  }
];

const WhyCUs = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="why-choose-us bg-light mt-5">
      <h2 className="fw-bold fs-1 pb-3">
        Why 
        <span className="text main-hover"> Choose Us </span>
      </h2>
      <p className='pb-4'>We specialize in providing customized travel services, offering everything from premium luxury hotels to comprehensive holiday packages. Our offerings cover both domestic and international destinations.</p>
      <Carousel 
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={false}
        arrows={false}
        slidesToSlide={1}
      >
        {details.map((item, index) => (
          <div key={index} className={`cards ${index % 2 === 0 ? 'bg-color1' : 'bg-color2'}`}    data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
            <h3 className='texts'>{item.title}</h3>
            <p className='ptext'>{item.detail}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default WhyCUs;

