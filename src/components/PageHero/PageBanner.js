import React from 'react'

const Banner = ({ title }) => {
  return (
    <div>
      <h1
        style={{
          color: 'white',
          letterSpacing: '5px',
        }}
      >
        {title}
      </h1>
    </div>
  )
}

export default Banner
