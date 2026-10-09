import React from 'react'
import "./Home.css";
import HomeItem from './HomeItem';

function Home() {
    return (
        <>
            <div className='home-container'>
                <div className='hero-section-container'>
                    <div className='hero-section'>
                        {/* Replace "hii there" with this */}
                        <h1>Discover <span>Everything</span></h1>
                        <p>Explore our latest collection across all categories with exclusive deals.</p>
                        <button className="shop-now-btn">Shop Now</button>
                    </div>

                    <div className='hero-section-img'>
                        {/* You can place an actual <img> tag here later */}
                        <img src="https://www.magnific.com/free-photos-vectors/shopping-https://img.magnific.com/free-vector/gradient-horizontal-sale-banner-template-with-photo_23-2149014887.jpg?semt=ais_hybrid&w=740&q=80day/24" alt="Hero Featured" />
                    </div>
                </div>

                <div className='homeitem'>
                    <HomeItem />
                </div>
            </div>
        </>
    )
}

export default Home;