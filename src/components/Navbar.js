import React from 'react'
import pinImg from '../assets/images/pin.png'
import telImg from '../assets/images/phone.png'
import logo from '../assets/images/logo.jpg'

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="location">
                    <div className="pin">
                        <img className='pin-img' src={pinImg} alt="" />
                        <p className='para-pin'>Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051</p>
                    </div>

                    <div className="phone">
                        <img className='phone-img' src={telImg} alt="" />
                        <p className='numbers'>(001) 88451234 <br /> (001) 88455438
                        </p>
                    </div>

                    <div className="button">
                        <button className='btn-location'>APPOINTMENT</button>
                    </div>
                    <img className='logo' src={logo} alt="" />

                </div>


                <div className="secondary-nav">
                    <a className='active-a links' href="/">Home</a>
                    <a className='links' href="/">Time Table</a>
                    <a className='links' href="/">About</a>
                    <a className='links' href="/">Blog</a>
                    <a className='links' href="/">Contact</a>
                    <i class="search-icon fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

        </>
    )
}
