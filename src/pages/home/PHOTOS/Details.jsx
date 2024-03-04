import React from 'react'
import { useParams } from 'react-router-dom'
import { photos } from './data'

export const Details = () => {
    const {id} = useParams()
    const foundItem = photos.find ((photo)=>{
        return photo.id == id 
    })
  return (
    <>
    <div className="container">
        <h1 className="display-1 text-center">
            {foundItem.name}
            <img width={'100%'} src={foundItem.Image} alt="" />
        </h1>
    </div>
    
    
    </>
  )
}
