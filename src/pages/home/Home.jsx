
import { Button } from '../../components/button/Button'
import './home.css'
import { Photos } from './PHOTOS/Photos'

export const Home = () => {
  return (
    <>
       <div className="container col-lg-4 text-center">
        <h1>
        I'm <span className='name'>Jenny Wilson</span> a Professional Photographer from New York City
        </h1>
        <p className="text-secondary">
        Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.
        </p>
      <Button content="Available for Hire"/>
       </div>
      <Photos/>
      <hr />
      <p className='text-center'>© Copyright PhotoFolio. All Rights Reserved</p>
      <p className='text-center'>Designed by <span className='span'>BootstrapMade</span></p>


    </>
  )
}
