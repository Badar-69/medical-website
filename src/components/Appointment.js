import React from 'react'

export default function Appointment() {
    return (
        <>
            <div className="app-parent">
                <div className="appointment">
                    <div className="app-first">
                        <div className="app-text">
                            <h2 className='app-small'>APPOINTMENT</h2>
                            <h3 className='app-heading'>Make An Appointment</h3>
                            <img className='app-line' src="/images/line.png" alt="line" />
                            <p className="app-para">A wonderful serenity has taken possession of my.
                            </p>
                        </div>

                        <div className="app-fields">
                            <div className="form-all">
                                <form className='app-form' action="" method="post">
                                    <input type="text" placeholder='Your name *' className='app-input' />
                                    <input type="email" placeholder='Your email *' className='app-input' />
                                    <input type="number" placeholder='Phone number *' className='app-input' />
                                    <input type="text" placeholder='Department *' className='app-input' />
                                    <input type="text" placeholder='Request *' className='app-req app-input' />
                                </form>
                            </div>
                            <button type='submit' className='form-btn'>SEND NOW</button>

                        </div>
                    </div>

                    <img className='app-img' src="/images/a.png" alt="" />
                </div>
            </div>

        </>
    )
}
