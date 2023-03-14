import React from 'react'
import lineImg from '../assets/images/line.png'

export default function Staff() {
    return (
        <>
            <div className="staff">
                <div className="staff-text">
                    <h2 className='staff-head-blue'>Our Team</h2>
                    <h3 className="staff-heading">The Most Qualified Staff</h3>
                    <img className='con-line' src={lineImg} alt="" />
                </div>
                <div className="doc-all">
                    <div className="doc-list">
                        <div className="doc doc-1">
                            <img className='doctor' src="/images/doc-1.jpg" alt="" />
                            <div className="doc-text">
                                <div className="doc-subtext">
                                    <h4 className='doc-name'>DR. MARIA ANGEL</h4>
                                    <h5 className='doc-proff'>General Dentist</h5>
                                    <i className="icons fa-brands fa-facebook-f"></i>
                                    <i className="icons fa-brands fa-twitter"></i>
                                    <i className="icons fa-brands fa-pinterest-p"></i>
                                </div>
                            </div>
                        </div>

                        <div className="doc doc-2">
                            <img className='doctor' src="/images/doc-2.jpg" alt="" />
                            <div className="doc-text">
                                <div className="doc-subtext">
                                    <h4 className='doc-name'>DR. WILLIAM ROBERT</h4>
                                    <h5 className='doc-proff'>General Dentist</h5>
                                    <i className="icons fa-brands fa-facebook-f"></i>
                                    <i className="icons fa-brands fa-twitter"></i>
                                    <i className="icons fa-brands fa-pinterest-p"></i>
                                </div>
                            </div>
                        </div>

                        <div className="doc doc-3">
                            <img className='doctor' src="/images/doc-3.jpg" alt="" />
                            <div className="doc-text">
                                <div className="doc-subtext">
                                    <h4 className='doc-name'>DR. MICHEL BERNADO</h4>
                                    <h5 className='doc-proff'>General Dentist</h5>
                                    <i className="icons fa-brands fa-facebook-f"></i>
                                    <i className="icons fa-brands fa-twitter"></i>
                                    <i className="icons fa-brands fa-pinterest-p"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="serv-button">
                    <button className="wid-btn">VIEW ALL TEAM</button>
                </div>
            </div>


        </>
    )
}
