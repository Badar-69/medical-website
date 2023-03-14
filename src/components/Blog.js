import React from 'react'
import lineImg from '../assets/images/line.png'
import art1Img from '../assets/images/art-1.jpg'
import art2Img from '../assets/images/art-2.jpg'
import art3Img from '../assets/images/art-3.jpg'

export default function blog() {
    return (
        <>
            <div className="blog">
                <div className="bg-text-all">
                    <div className="blog-text">
                        <h2 className='blog-head-blue'>Our Blog</h2>
                        <h3 className="blog-heading">Latest From Blog</h3>
                        <img className='con-line' src={lineImg} alt="" />
                    </div>
                </div>

                <div className="latest-bg">
                    <div className="article article-1">
                        <img className='art-img' src={art1Img} alt="" />
                        <div className="art-text">
                            <p className="art-para-1">May 16, 2020</p>
                            <p className="art-para-2">Taylor Life In Other Word</p>
                        </div>
                    </div>

                    <div className="article article-2">
                        <img className='art-img' src={art2Img} alt="" />
                        <div className="art-text">
                            <p className="art-para-1">May 16, 2020</p>
                            <p className="art-para-2">How To Choose The Doctor...</p>
                        </div>
                    </div>

                    <div className="article article-3">
                        <img className='art-img' src={art3Img} alt="" />
                        <div className="art-text">
                            <p className="art-para-1">May 16, 2020</p>
                            <p className="art-para-2">How To Make A Checkup...</p>
                        </div>
                    </div>

                </div>

                <div className="bg-button">
                    <button className="blog-btn">READ MORE</button>
                </div>
            </div>

        </>
    )
}
