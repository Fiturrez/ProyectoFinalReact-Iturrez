import { useState, useEffect, useContext} from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { Spinner } from "react-bootstrap"
import { getProducts, getFilterProducts } from "../firebase/db"

function ItemListContainer () {
    const [items, setItems]= useState([])
    const { id } = useParams()

    useEffect (()=>{
        id ? getFilterProducts(id, setItems) : getProducts(setItems)
        },[id])

    if (items.length === 0) {
        return(
        <>
            <Spinner animation="border" variant="warning" />
        </>
        )
    }

    return (
        <ItemList items = {items} />
    )
}

export default ItemListContainer