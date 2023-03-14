import React from 'react'
import logo from '../assets/images/logo.jpg'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="foot-first">
          <p className="foot-para">Get Free Consultancy <br /> Call (510) 352-6578</p>
          <input className='foot-input' type="text" placeholder='Your Name' />
          <input className='foot-input' type="email" placeholder='Your Email' />
          <button className='foot-btn'>SEND NOW</button>
        </div>
        <hr className='hr-line' />

        <div className="foot-second">
          <div className="footer-text">
            <img src={logp} alt="" />
            <p className="foot-copy">Copyright &copy; 2022 Modify by Phlox theme. All Rights Reserved.</p>
          </div>

          <div className="footer-text">
            <h2 className="foot-head">Departments</h2>
            <a href="/" className="footer-links">Medical and Health</a>
            <a href="/" className="footer-links">Dental Care and Surgery</a>
            <a href="/" className="footer-links">Eye Treatment</a>
            <a href="/" className="footer-links">Children Chare</a>
            <a href="/" className="footer-links">Nuclear magnetic</a>
            <a href="/" className="footer-links">Traumatology</a>
          </div>


          <div className="footer-text">
            <h2 className="foot-head">Useful links</h2>
            <a href="/" className="footer-links">Home</a>
            <a href="/" className="footer-links">Time Table</a>
            <a href="/" className="footer-links">About</a>
            <a href="/" className="footer-links">Blog</a>
            <a href="/" className="footer-links">Contact</a>
          </div>

          <div className="footer-text">
            <h2 className="foot-head">Our Contacts</h2>
            <p className="para-link">Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051
            </p>
            <p className="para-link">info@yourdomain.com</p>
            <p className="para-link">+99 (0) 101 0000 888</p>
            <p className="foot-icons">
              <i className="foot-icons fa-brands fa-facebook-f"></i>
              <i className="foot-icons fa-brands fa-twitter"></i>
              <i className="foot-icons fa-brands fa-pinterest-p"></i>
              <i class="foot-icons fa-brands fa-vimeo-v"></i>
            </p>
          </div>
        </div>
      </div>


    </>
  )
}
