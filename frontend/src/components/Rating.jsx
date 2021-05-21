import React from 'react';

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          <i style={{ color }} className={
            value >= i+1
              ? 'fas fa-star'
              : value >= i+0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }/>
        </span>
      ))}

      {text &&
        <span> {text}</span>
      }
    </div>
  )
}

export default Rating;
