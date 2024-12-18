import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext } from "react"
import { cartContext } from "../context/cartContext"
import { serverTimestamp } from "firebase/firestore"
import { createOrder } from "../firebase/db"


function CheckOutForm () {
    const {cart, getTotal} = useContext(cartContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target[0].value
        const name = e.target[1].value
        const phone = e.target[2].value

        const order = {
            buyer: {name, email, phone},
            total: getTotal(),
            items: cart,
            date: serverTimestamp()   
        }
        createOrder(order)
    }
    return (
        <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="+54 11 2222 3333" />
            </Form.Group>
            <Button variant="primary btn-success" type="submit">
                Submit
            </Button>
        </Form>
)
}

export default CheckOutForm
