import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { removeCart } from '../features/yourCart';
function Addcart() {
    const dispatch=useDispatch();
    const selector = useSelector(state => state.cart.cartitem);

    console.log(selector);
    return (
        <div>
            {selector.map(selector => (
                <div>
                    <h1>{selector.title}</h1>
                    {
                        selector.images.map(image => (
                            <div key={image}>
                                <img src={image} alt="error" />
                            </div>
                        ))
                    }
                    <button onClick={()=>dispatch(removeCart(selector.id))}>remove</button>
                </div>
            ))
            }
        </div>
    )
}

export default Addcart
