import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const [invalid, setInvalid] = useState(null)
    const {id} = useParams()

    //Firebase
    useEffect(() => {
        setLoading(true)
        const productCollection = collection(db, "viajes")            
        const docRef= doc(productCollection, id)
        getDoc(docRef)
        .then((res)=> {
            if(res.data()){
                setProduct({id:res.id, ...res.data()})
            }else{
                setInvalid(true)
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[])

    if(invalid){
        return<div>
          <h2>El producto no existe</h2>
        </div>
      }
  
    return (
      <div>
          {loading ? <LoaderComponent/>:<ItemDetail product={product}/>}
      </div>
    )
  }

export default ItemDetailContainer
