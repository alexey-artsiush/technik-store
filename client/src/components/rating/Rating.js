import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import "./Rating.css"

export const Rating = () => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1
        return (
        <label key={i}>
          <input 
            type={"radio"} 
            name="rating" 
            value={ratingValue} 
            onClick={() => setRating(ratingValue)}
          />
          <FaStar 
            className='star' 
            color={ratingValue <= (hover || rating) ? "#0d6efd" : "#e4e5e9"} 
            size={20}
            onMouseLeave={()=> setHover(null)}
            onMouseEnter={()=> setHover(ratingValue)}
            />
        </label>)
      })}
      
    </div>
  )
}