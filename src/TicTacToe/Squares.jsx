import React from 'react'


const Squares = ({value,handleclick}) => {
  return (
    <div className='Sqaure' onClick={handleclick}>
      <h5>{value}</h5>
    </div>
  )
}

export default Squares
