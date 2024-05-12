import { useValue } from "../../Context"
import "./CartItem.css"

export default function CartItem({ name, id, price, img, quantity }) {

    const {increaseQuantity, decreaseQuantity, handleRemoveToCart } = useValue();

    
    return (
        <>
            <div className="cartitem">
                <img src={img} alt="" />
                <div className="productdetails">
                    <p>{name}</p>
                    <div className="price">
                        <h2>&#8377; {price}</h2>
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828899.png" alt="" onClick={() => decreaseQuantity({id, price})} />
                        <div>{quantity}</div>
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png" alt="" onClick={() => increaseQuantity({ id, price, name })} />
                    </div>
                </div>
                <button onClick={() => handleRemoveToCart({id,price, name})}>Remove From Cart</button>
            </div>

        </>
    )
}