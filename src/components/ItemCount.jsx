import { useState } from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext'


function ItemCount({detail}) {
  const [itemCount, setItemCount] = useState(0) 
  const {addToCart, removeFromCart} = useContext(cartContext)

  const addItem = () => {
    setItemCount(itemCount + 1) 
  }
  const removeItem = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1) 
    }
  }
  const handleAddToCart = () => {
    addToCart({...detail, quantity: itemCount})
  }

   const handleRemoveFromCart = () => {
    if (itemCount > 0) {
      removeFromCart(detail.id);  
      setItemCount(0); 
    }
  }
  return (
    <div>
      <h2>Wish List</h2>
      <p>Items en el carrito: {itemCount}</p>
      <button onClick={addItem}> + </button>
      <button onClick={removeItem} disabled={itemCount === 0}>
        -
      </button>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleRemoveFromCart} disabled={itemCount === 0}>Remove from Cart</button>
    </div>

  )
}

export default ItemCount