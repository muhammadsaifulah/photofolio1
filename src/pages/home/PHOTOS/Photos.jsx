import React from 'react'
import { photos } from './data'
import { SinglePhoto } from './SinglePhoto'

export const Photos = () => {
    
  return (
    <>
    <div className="container-fluid">
        <div className="row">

        
 {photos.map((photo)=>{

     return <SinglePhoto key={photo.id}{...photo}/>
    })}
    </div>
    </div>
    
    </>
  )
}
