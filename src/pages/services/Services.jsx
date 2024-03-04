import React, { useEffect, useState } from 'react';
import { Button } from '../../components/button/Button';
import { TiHeartFullOutline } from 'react-icons/ti'; // Corrected import statement for the heart icon
import './Services.css';
import Slider from '../about/Slider';
import { useLocation } from 'react-router-dom';
import { Loader } from '../../components/loader/Loader';

export const Services = () => {
  const path = useLocation();
  const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true

  useEffect(() => {
      // Simulate loading by setting isLoading to false after a short delay
      const timeout = setTimeout(() => {
          setIsLoading(false);
      }, 2000); // Change the timeout duration as needed

      // Cleanup function to clear the timeout
      return () => clearTimeout(timeout);
  }, [path.pathname]); // Run useEffect whenever path.pathname changes

  return (
    <>
     <div>
            {/* Conditional rendering of Loader based on isLoading state */}
            {isLoading ? <Loader /> : <div></div>}
        </div>
      <div className="container col-lg-5 mx-auto text-center">
        <h1 className="text-center">Services</h1>
        <p className="fs-5 text-center">
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
        </p>
        <Button content="Available for hire" className="d-block ms-auto" />
      </div>
      <div className="col-lg-7 mx-auto">
        <div className="d-flex gap-3 my-4">
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <div key={index} className="card text-white p-5 position-relative" style={{ background: '#161718' }}>
                <div style={{ width: '100%', height: '0', top: '0', left: '0', background: '#27A776', position: 'absolute', zIndex: '22' }} className="over"></div>
                <div className="flex flex-column gap-3" style={{ zIndex: '333' }}>
                  <div className="icon p-1 rounded-circle align-self-start" style={{ background: '#27A776', width: 'max-content' }}>
                    <TiHeartFullOutline size={50} /> {/* Replaced TbActivityHeartbeat with TiHeartFullOutline */}
                  </div>
                  <h3>Lorem Ipsum</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ad.</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container">
        <Slider/>
      </div>
    </>
  );
};
