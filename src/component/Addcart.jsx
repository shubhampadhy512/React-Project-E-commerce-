import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from '../features/yourCart';
import './Addcart.css';

function Addcart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartitem);

    const subtotal = useSelector(state => state.cart.totalprice);
    console.log(subtotal);
    const shipping = subtotal > 0 ? 10.00 : 0;
    const total = subtotal + shipping;

    const handlecart = (id, itemPrice) => {
        console.log(itemPrice);
        dispatch(removeCart({id, itemPrice}));
    }

    return (
        <div className="cart-page">
            <div className="cart-container">
                {/* Left Section: Item List */}
                <div className="cart-items-section">
                    <h2 className="section-title">Shopping Cart ({cartItems.length} items)</h2>

                    {cartItems.length === 0 ? (
                        <div className="empty-cart">Your cart is currently empty.</div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.newid || item.id} className="cart-card">
                                <div className="card-image-wrapper">
                                    <img src={item.images[0]} alt={item.title} className="card-img" />
                                </div>

                                <div className="card-content">
                                    <div className="card-header">
                                        <div>
                                            <h3 className="card-title">{item.title}</h3>
                                            <p className="card-brand">Premium Collection</p>
                                        </div>
                                        <p className="card-price">${item.price}</p>
                                    </div>

                                    <div className="card-details">
                                        <div className="quantity-badge">
                                            Qty: <strong>{item.quantity}</strong>
                                        </div>
                                    </div>

                                    <div className="card-actions">
                                        <button className="btn-edit">
                                            Edit
                                        </button>
                                        <button
                                            className="btn-remove"
                                            onClick={() => handlecart(item.newid, item.itemPrice)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Right Section: Order Summary */}
                <div className="cart-summary-section">
                    <div className="summary-box">
                        <h3 className="summary-title">Order Summary</h3>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                        </div>
                        <div className="summary-row total-row">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button className="btn-checkout" disabled={cartItems.length === 0}>
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addcart;