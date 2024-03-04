
import React, { useEffect, useState } from 'react';
import { Button } from '../../components/button/Button'
import './home.css'
import { Photos } from './PHOTOS/Photos'
import { IoMdClose } from "react-icons/io";
import { usePathname } from 'react'
import { Loader } from '../../components/loader/Loader';
import { useLocation } from 'react-router-dom';

export const Home = () => {
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
  

  const [imageshow, setImageshow] = useState(false);
  const [singleImage, setSingleImage] = useState('');
  
  return (
    <>
     <div>
            {/* Conditional rendering of Loader based on isLoading state */}
            {isLoading ? <Loader /> : <div></div>}
        </div>
    
    <div style={{
                transition: 'all 0.50s',
                scale: `${imageshow ? '1': '0'}`,
    }} className="image-overlay">
      <IoMdClose onClick={()=>setImageshow(false)} className='cross-overlay' cursor='pointer' size={35}/> 
      
        <div style={{
          height: '100%'
        }} 
          className="w-50 mx-auto d-flex justify-content-center align-item-center">
            
            <img width={'100%'} src={singleImage} alt="Single Image" /> {/* Fixed typo singleimage to singleImage */}
            
          </div>
      
      
   
    </div>
      
    
       
       <div className="container col-lg-4 text-center">
        <h1>
        I'm <span className='name'>Jenny Wilson</span> a Professional Photographer from New York City
        </h1>
        <p className="text-secondary">
        Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.
        </p>
      <Button content="Available for Hire"/>
       </div>
      <Photos show={setImageshow} singleImage={singleImage} setSingleImage={setSingleImage}/> {/* Fixed prop name singleimage to singleImage */}
      <hr />
      <p className='text-center'>© Copyright PhotoFolio. All Rights Reserved</p>
      <p className='text-center'>Designed by <span className='span'>BootstrapMade</span></p>


    </>
  )
}
