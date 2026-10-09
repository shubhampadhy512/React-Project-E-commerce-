import React, { useEffect, useState } from "react";
import "./HomeItem.css";
import { useDispatch } from "react-redux"
import { infoItem } from "../features/infoItem";
import { useNavigate } from "react-router-dom";

function HomeItem() {
    const [items, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Defined 5 categories for 5 rows
        const categories = [
            "mens-watches",
            "smartphones",
            "laptops",
            "mens-shoes",
            "fragrances"
        ];

        const fetchdata = async () => {
            try {
                const out = await Promise.all(
                    categories.map(async (cat) => {
                        // limit=4 ensures exactly 4 items per category
                        const res = await fetch(`https://dummyjson.com/products/category/${cat}?limit=4`);
                        const data = await res.json();
                        return { cate: cat, products: data.products };
                    })
                );

                const temp = {};
                out.forEach((element, index) => {
                    temp[index] = element;
                });

                setItem(temp);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching products:", err);
                setLoading(false);
            }
        };

        fetchdata();
    }, []);

    const handleInfo = (e) => {
        // console.log(e);
        dispatch(infoItem(e));
        navigate("/infoproduct");

    }
    if (loading) {
        return (
            <div className="loader-container">
                <h2 className="loading-text">Loading Products...</h2>
            </div>
        );
    }

    return (
        <div className="home-wrapper">
            <div className="item-main-container">
                {Object.entries(items).map(([key, categoryData]) => (
                    <div className="category-section" key={key}>
                        <div className="category-header">
                            <h2 className="category-title">
                                {categoryData.cate.replace("-", " ")}
                            </h2>
                            <button className="view-all">View All</button>
                        </div>

                        <div className="products-grid">
                            {categoryData.products.map((item) => (
                                <div className="item-card" key={item.id} onClick={() => handleInfo(item)}>
                                    <div className="item-image-container">
                                        <img src={item.thumbnail} alt={item.title} />
                                        <span className="discount-badge">
                                            {Math.round(item.discountPercentage)}% OFF
                                        </span>
                                    </div>

                                    <div className="item-info">
                                        <h3 className="product-name">{item.title}</h3>

                                        <div className="price-row">
                                            <span className="current-price">₹{item.price}</span>
                                            <span className="original-price">
                                                ₹{Math.round(item.price / (1 - item.discountPercentage / 100))}
                                            </span>
                                        </div>

                                        <p className="savings-text">
                                            Limited time deal
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeItem;