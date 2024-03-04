import React, { useEffect, useState } from 'react'
import { Loader } from '../../components/loader/Loader'
import { Button } from '../../components/button/Button'
import { FaChevronRight } from "react-icons/fa6";
import Slider from './Slider';
import { useLocation } from 'react-router-dom';
const About = () => {
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
    <div className="container col-lg-5 mx-auto text-center ">
      
    <h1 className="text-center">
      About
    </h1>
    <p className='fs-5 text-center'>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
    <Button content='Availabe for hire' className='d-block ms-auto'/>
    </div>
    <div className="container row col-lg-7 mx-auto">
      <div className="col-lg-5">
        <img width='100%' src="https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/profile-img.jpg" alt="" />
      </div>
      <div className="col-lg-7">
        <h4 style={{
          color:'#27A276'
        }}>Professional Photographer from New York</h4>
        <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>
        <div className="d-flex gap-5 ">
          <ul className='d-flex flex-column gap-4 mx-3 list-unstyled'>
            <li>
              <strong><FaChevronRight color='#27A276' />Birthday:</strong>1 may 1995
            </li>
            <li>
            <strong><FaChevronRight color='#27A276' />Website:</strong>www.example.com
            </li>
            <li><strong><FaChevronRight color='#27A276' />Phone:</strong>123456789</li>
            <li><strong><FaChevronRight color='#27A276' />City:</strong>Islambad</li>
          </ul>
          <ul className='d-flex flex-column gap-4 list-unstyled'>
            <li>
              <strong><FaChevronRight color='#27A276' />Age:</strong>30
            </li>
            <li>
            <strong><FaChevronRight color='#27A276' />Degree:</strong>Master
            </li>
            <li><strong><FaChevronRight color='#27A276' />Email:</strong>abc@gmail.com</li>
            <li><strong><FaChevronRight color='#27A276' />Freelance:</strong>Available</li>
          </ul>
        </div>
        <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
        <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
      </div>
    </div>
    <div className="container my-5">
      <div className="d-flex align-items-center gap-3">
        <h5 className="text-secondary text-uppercase">
          testiomonials
        </h5>
        <hr className='border-0' style={{
          height:'5px',
          width: '80px',
          background:'#27A776'
        }
        } />
      </div>
      <h1>What they are saying</h1>
      <Slider/>
    </div>

    </>
  )
}

export default About