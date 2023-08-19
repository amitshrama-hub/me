import React from 'react'
import Amit_Sharma from "../assets/Amit_Sharma.pdf"

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Amit_Sharma} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
export default CTA
