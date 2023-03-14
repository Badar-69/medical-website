import React from 'react'
import nurseImg from '../assets/images/nurse.png';
import lineImg from '../assets/images/line.png';
import bandImg from '../assets/images/bandages.png'
import pillImg from '../assets/images/pills.png'
import heartImg from '../assets/images/heart.png'
import wheelImg from '../assets/images/wheelchair.png'

export default function Main() {
    return (
        <>
            <div className="parent-main">
                <div className="main">
                    <div className="main-uptext">
                        <img className='color-line' src={lineImg} alt="line" />

                        <h2 className='up-head'>Medical Center</h2>
                    </div>

                    <div className="main-comp">
                        <div className="main-text">
                            <h3 className='main-heading'>Take Care of Your Health Now<span className='dot'>.</span></h3>
                            <p className='para-main'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which.</p>
                            <button className='btn-main'>READ MORE</button>

                        </div>
                        <img className='nurse' src={nurseImg} alt="" />

                    </div>

                    <div className="cards">
                        <div className="card-bg card card-1">
                            <h4 className='card-heading-bg'>OUR DEPARTMENTS</h4>
                        </div>

                        <div className="card card-2">
                            <div className="card-text">
                                <img src={bandImg} alt="bandage" />
                                <h4 className='card-heading'>Eye Treatments</h4>
                            </div>
                        </div>

                        <div className="card card-3">
                            <div className="card-text">
                                <img src={pillImg} alt="pills" />
                                <h4 className='card-heading'>Nuclear Magnetic</h4>
                            </div>
                        </div>

                        <div className="card card-4">
                            <div className="card-text">
                                <img src={heartImg} alt="heart" />
                                <h4 className='card-heading'>Traumatology</h4>
                            </div>
                        </div>

                        <div className="card card-5">
                            <div className="card-text">
                                <img src={wheelImg} alt="wheelchair" />
                                <h4 className='card-heading'>Infantile Paralysis</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
