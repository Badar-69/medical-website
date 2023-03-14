import React from 'react'
export default function Details() {
    return (
        <>
            <div className="details">
                <div className="details-text">
                    <h2 className='deta-head-blue'>CARE AND AMENITIES</h2>

                    <h3 className='deta-heading'>Why Choose Us?</h3>

                    <img className='deta-line' src="/images/line.png" alt="" />

                    <p className='deta-para'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy wit.</p>

                    <div className="points">
                        <p className='deta-circle'> <i class="circle fa-regular fa-circle"></i> My entire soul, like these sweet</p>
                        <p className='deta-circle'><i class="circle fa-regular fa-circle"></i> Mornings of spring which I enjoy with my whole heart.</p>
                        <p className='deta-circle'><i class="circle fa-regular fa-circle"></i> Serenity has taken possession</p>
                    </div>

                    <button className="btn-main">READ MORE</button>

                    <div className="deta-num">
                        <div className="num-1">
                            <div className="num-1-text">
                                <img src="/images/Person.png" alt="" />
                                <p className="counter-1">+2500</p>
                                <p className="para-count">SATISFIED PATIENTS</p>
                            </div>
                        </div>

                        <div className="num-2">
                            <img className='store' src="/images/Drugstore.png" alt="" />
                            <div className="num-2-text">
                                <span className="counter-2">+256</span>
                                <p className="para-count">CLINIC OF BEDS</p>
                            </div>

                        </div>
                    </div>
                </div>

                <img className='deta-img' src="/images/nurse-3.jpg" alt="" />

            </div>

        </>
    )
}
