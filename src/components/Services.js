import React from 'react'

export default function Services() {
  return (
    <>
      <div className="services">
        <div className="serv-text">
          <h2 className='serv-head-blue'>Our Services</h2>
          <h3 className="serv-heading">High-Quality Services</h3>
          <img className='con-line' src="/images/line.png" alt="" />
        </div>

        <div className="widgets">
          <div className="wid-1 wid-cards">
            <div className="wid-text">
              <img className='wid-img' src="/images/stethoscope.png" alt="" />
              <h4 className='wid-heading'>FAMILY CARE</h4>
              <p className='wid-para'>A wonderful serenity has taken possession of my entire soul,like.</p>
            </div>
          </div>

          <div className="wid-2 wid-cards">
            <div className="wid-text">
              <img className='wid-img' src="/images/injection.png" alt="" />
              <h4 className='wid-heading'>FAMILY CARE</h4>
              <p className='wid-para'>A wonderful serenity has taken possession of my entire soul,like.</p>
            </div>
          </div>

          <div className="wid-3 wid-cards">
            <div className="wid-text">
              <img className='wid-img' src="/images/drip.png" alt="" />
              <h4 className='wid-heading'>FAMILY CARE</h4>
              <p className='wid-para'>A wonderful serenity has taken possession of my entire soul,like.</p>
            </div>
          </div>

          <div className="wid-4 wid-cards">
            <div className="wid-text">
              <img className='wid-img' src="/images/pills_1.png" alt="" />
              <h4 className='wid-heading'>FAMILY CARE</h4>
              <p className='wid-para'>A wonderful serenity has taken possession of my entire soul,like.</p>
            </div>
          </div>
        </div>
        
        <div className="serv-button">
          <button className="wid-btn">VIEW ALL SERVICES</button>
        </div>
      </div>



    </>
  )
}
