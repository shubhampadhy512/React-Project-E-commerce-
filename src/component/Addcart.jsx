import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { removeCart } from '../features/yourCart';
function Addcart() {
    const dispatch=useDispatch();
    const selector = useSelector(state => state.cart.cartitem);
    // console.log(selector.quantity);
const totalPrice = useSelector(state => state.cart.totalprice);
    return (
        <div>
            {selector.map(selector => (
                <div key={selector.newid}>
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
            <h1>{totalPrice}</h1>
        </div>
    )
}

export default Addcart
