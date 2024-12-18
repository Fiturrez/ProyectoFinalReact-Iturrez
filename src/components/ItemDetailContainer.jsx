import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { getDetail } from "../firebase/db"

function ItemDetailContainer () {
    const[detail, setDetail] = useState()
    const { id } = useParams()
    
    useEffect (() => {
        getDetail(id, setDetail)
    }, [id])
    return (
       <ItemDetail detail={detail}/>
    )
}

export default ItemDetailContainer

