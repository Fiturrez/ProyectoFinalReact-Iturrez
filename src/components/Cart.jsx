import { ListGroup } from "react-bootstrap"
import { useContext } from "react"
import { cartContext } from "../context/cartContext"
import CheckOutForm from "./CheckOutForm"

function Cart () {

    const {cart, removeFromCart, clearCart} = useContext(cartContext)

    const handleRemove = (prodId) => {
        removeFromCart(prodId)
      }
    
    const handleClearCart = () => {
        clearCart()
      };

    return (
        <div className="d-flex justify-content-between w-100 mx-auto">
            <ListGroup className="w-50 me-3">
            <h2>Order</h2>
                {cart.map(prod => (
                    <ListGroup.Item key={prod.id}>
                        <div className="d-flex justify-content-between align-items-center">
                          <img src={prod.images} alt={prod.title} style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}/>
                          {prod.title} x {prod.quantity}
                          <button onClick={() => handleRemove(prod.id)} disabled={prod.quantity === 0}>
                            -
                          </button>
                        </div>
                     </ListGroup.Item>           
                ))}  
                
                {cart.length > 0 && (
                  <button onClick={handleClearCart} className="btn btn-success mb-3">
                    Empty Cart
                  </button>
                )}
            </ListGroup>
              
            <div className="w-50">
                <h2>Check out form</h2>
                <CheckOutForm/>
            </div>
         </div>
         )
    }

export default Cart