import { Button } from "react-bootstrap"
import cartIcon from "../assets/carrito-de-compras.png"
import { useContext } from 'react'
import { cartContext } from '../context/cartContext'
import { Link } from "react-router-dom"

function CartWidget (){
    const {getQuantity} = useContext(cartContext)
    
    return(
        <Button 
            variant='light'
            as={Link}
            to='./cart'
        >
            <img src={cartIcon} style={{ width: '30px', height: '30px' }}/>
            {getQuantity()}
        </Button>
    );
}

export default CartWidget;