import React from 'react'

export const Button = ({content,color}) => {
  return (
    <>
    
    <button className="btn fw-bold text-white" style={{
        background:`${color ? color : '#27A776'}`
    }}>
            {content}
    </button>
    
    </>
  )
}
