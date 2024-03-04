import React from 'react'
import { photos } from './data'
import { SinglePhoto } from './SinglePhoto'

export const Photos = ({show,singleImage,setSingleImage}) => {
    
  return (
    <>
    <div className="container-fluid">
        <div className="row">

        
 {photos.map((photo)=>{

     return <SinglePhoto show={show} singleImage={singleImage} setSingleImage={setSingleImage} key={photo.id}{...photo}/>
    })}
    </div>
    </div>
    
    </>
  )
}
