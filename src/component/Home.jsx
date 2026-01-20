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
                        <img src="https://via.placeholder.com/400" alt="Hero Featured" />
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