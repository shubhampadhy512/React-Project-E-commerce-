import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTocart } from '../features/yourCart';
import "./InfoProduct.css";

function InfoProduct() {
    const dispatch = useDispatch();
    // Using your existing selector
    const selector = useSelector(state => state.info.selectedItem);
    // States for local interaction
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState("");

    // Sync main image when selector changes
    useEffect(() => {
        if (selector) {
            setMainImage(selector.thumbnail);
            setQuantity(1); // Reset quantity when looking at a new product
        }
    }, [selector]);

    if (!selector) return <div className="loader">No product selected.</div>;

    // Logic: Calculate total price based on quantity
    const itemPrice = (selector.price * quantity).toFixed(2);

    const handdetails = () => {
        // Keeping your logic: adding to cart with the selected quantity
        dispatch(addTocart({ ...selector, quantity,itemPrice},itemPrice));
        console.log(selector);
    };

    return (
        <div className="amazon-container">
            <div className='main-layout'>

                {/* 1. Left: Image Gallery (Uses selector.images) */}
                <div className='image-section'>
                    <div className='thumbnails'>
                        {/* If images array exists, map it; otherwise show thumbnail */}
                        {(selector.images || [selector.thumbnail]).map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`view-${index}`}
                                className={mainImage === img ? 'thumb-active' : ''}
                                onClick={() => setMainImage(img)}
                            />
                        ))}
                    </div>
                    <div className='main-img-container'>
                        <img src={mainImage} alt={selector.title} />
                    </div>
                </div>

                {/* 2. Middle: Info Section */}
                <div className='info-section'>
                    <span className="brand-link">Visit the {selector.brand || 'Store'}</span>
                    <h1 className="product-title">{selector.title}</h1>
                    <div className="rating-row">
                        <span className="stars">
                            {"★".repeat(Math.round(selector.rating || 0))}
                            {"☆".repeat(5 - Math.round(selector.rating || 0))}
                        </span>
                        <span className="rating-count">{selector.rating} ratings | 100+ answered questions</span>
                    </div>

                    <hr />

                    <div className="price-area">
                        <div className="discount-tag">Limited time deal</div>
                        <div className="price-row-main">
                            <span className="off-percent">-{selector.discountPercentage}%</span>
                            <span className="currency">$</span>
                            <span className="price-val">{selector.price}</span>
                        </div>
                        <p className="mrp">M.R.P.: <span className="strike">${(selector.price * 1.3).toFixed(2)}</span></p>
                    </div>

                    <div className="description">
                        <h3>About this item</h3>
                        <p>{selector.description}</p>
                    </div>
                </div>

                {/* 3. Right: Buy Box (Multiplies Price x Quantity) */}
                <div className='buy-box'>
                    <div className="total-price-display">
                        <span className="currency-small">$</span>
                        <span className="total-amount">{itemPrice}</span>
                    </div>

                    <p className="delivery-text">FREE delivery <b>Monday, Jan 20</b>. Order within 5 hrs.</p>
                    <h3 className="stock-status">In Stock</h3>

                    <div className="qty-row">
                        <label>Qty:</label>
                        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                                <option key={n} value={n}>{n}</option>
                            ))}
                        </select>
                    </div>

                    <div className="action-buttons">
                        <button className="add-cart-btn" onClick={handdetails}>Add to Cart</button>
                        <button className="buy-now-btn">Buy Now</button>
                    </div>

                    <div className="footer-info">
                        <p>Ships from <b>Amazon</b></p>
                        <p>Sold by <b>{selector.brand || 'Retailer'}</b></p>
                    </div>
                </div>
            </div>

            {/* 4. Bottom: Reviews Section (Dynamic from selector) */}
            <div className="review-section">
                <hr />
                <h2>Customer reviews</h2>
                {selector.reviews?.length > 0 ? (
                    selector.reviews.map((rev, i) => (
                        <div key={i} className="review-card">
                            <div className="user-profile">
                                <div className="user-avatar">{rev.reviewerName.charAt(0)}</div>
                                <strong>{rev.reviewerName}</strong>
                            </div>
                            <div className="review-rating">
                                {"★".repeat(rev.rating)} <b>Verified Purchase</b>
                            </div>
                            <p className="review-text">{rev.comment}</p>
                        </div>
                    ))
                ) : (
                    <p className="no-reviews">No customer reviews yet.</p>
                )}
            </div>
        </div>
    );
}

export default InfoProduct;