import { useEffect, useState } from "react"
import ItemList from "./itemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, where, query, addDoc } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()

    // Firebase

    useEffect(() => {
        setLoading(true)
        const productCollection = categoryId 
        ? query(collection(db, "viajes"), where("category","==", categoryId))
        : collection(db, "viajes")
        getDocs(productCollection)
        .then((res)=> {
            const list = res.docs.map((doc)=>{
                return {
                    id:doc.id,
                    ...doc.data()
                }
            })
            setData(list)
            })
            .catch((error)=> console.log(error))
            .finally(()=> setLoading(false))
        },[categoryId])

    return(
        <main>
            <h1 className='bienvenido'>{greeting}{categoryId && <span style={{textTransform:'capitalize'}}>{categoryId}</span>}</h1>
            {loading ? <LoaderComponent/> : <ItemList data={data}/>}
        </main>
    )
}

export default ItemListContainer