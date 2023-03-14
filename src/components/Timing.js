import React from 'react'
import lineImg from '../assets/images/line.png'
import timeImg from '../assets/images/timing.png'
import nurse2Img from '../assets/images/nurse.jpg'

export default function Timing() {
  return (
    <>
      <div className="container">
        <div className="con-text">
          <h2 className='con-head-blue'>Welcome to phlox</h2>

          <h3 className='con-heading'>Wonderful Serenity Has Taken Possession</h3>

          <img className='con-line' src={lineImg} alt="" />

          <p className='con-para'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>

          <button className="btn-main">READ MORE</button>

        </div>

        <img className='timing' src={timeImg} alt="" />

        <img className='nurse-2' src={nurse2Img} alt="" />
      </div>

    </>
  )
}
