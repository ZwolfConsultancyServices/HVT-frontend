import React from 'react';
import { useParams } from 'react-router-dom';
import tours from "../Data/data.js";
import PlanCard from './PlanCard';

const TourDetails = () => {
  const { id } = useParams();
  const tour = tours.find(t => t.id === parseInt(id));

  return (
    <section className='bg-light'>
      <div className="container mb-5 mt-5 text-center p-5">
        {tour ? (
          <>
            <h2>{tour.title}</h2>
            <p>{tour.details}</p>
            <h3>Plans</h3>
            <div className="row">
              {tour.plans.map((plan, index) => (
                <div className="col-12 col-md-6 mb-4" key={index}>
                  <PlanCard plan={plan} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Tour not found</p>
        )}
      </div>
    </section>
  );
};

export default TourDetails;
