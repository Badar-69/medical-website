import React from 'react'

export default function Emergency() {
    return (
        <>
            <div className="emg-parent">
                <div className="emergency">
                    <img className='emg-img' src="/images/phone.png" alt="" />
                    <div className="emg-text">
                        <h2 className='emg-heading'>In Case Of Emergency Call</h2>
                        <p className="emg-para">(510) 352-6578</p>
                    </div>

                    <div className="emg-text-2">
                        <h2 className='emg-head-2'>Need Doctor For Checkup</h2>
                        <button type="submit" className='emg-btn'>READ MORE</button>
                    </div>
                </div>
            </div>
        </>
    )
}
