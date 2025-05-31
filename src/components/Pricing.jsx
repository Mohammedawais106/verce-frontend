import React from 'react';
import { Check } from 'lucide-react'; // or from 'react-icons/fa', adjust as needed
import { Link } from 'react-router-dom';

const Pricing = () => {
  const pricing = [
    {
      imgurl: "./pricing.jpg",
      title: "QUARTERLY",
      price: "18000",
      length: 3
    },
    {
      imgurl: "./pricing.jpg",
      title: "HALF_YEARLY",
      price: "34000",
      length: 6
    },
    {
      imgurl: "./pricing.jpg",
      title: "YEARLY",
      price: "67000", // this seemed too low before
      length: 12
    }
  ];

  return (
    <section className='pricing'>
      <h1>MY FITNESS GYM PLAN</h1>
      <div className="wrapper">
        {
          pricing.map((element) => (
            <div className="card" key={element.title}>
              <img src={element.imgurl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>for {element.length} Months</p>
              </div>
              <div className="description">
                <p><Check /> Equipment</p>
                <p><Check /> All Day Free Training</p>
                <p><Check /> Free Rest Room</p>
                <p><Check /> 24/7 Skilled Support</p>
                <p><Check /> 20 Days Freezing Option</p>
                <Link to="/">Join Now</Link>
                
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Pricing;
