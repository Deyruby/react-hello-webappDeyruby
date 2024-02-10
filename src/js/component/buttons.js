import React, { useContext } from "react";
 import { Context } from "../store/appContext"




const Buttons= ()=>{
    const { store, actions } = useContext(Context)
    
    const handleNext=()=>{
        actions.getPersonajes(store.infor.next)
    }

const handlePrev=()=>{
    actions.getPersonajes(store.infor.prev)
}

    return (
    <>
<div className="container d-flex justify-content-center pb-2">
   {store.infor.prev ? <button onClick={()=>handlePrev()}>Previous</button>: null}
     { store.infor.next ? <button onClick={()=>handleNext()}>Next</button>: null}
        </div>
    
    </>
)}


export default Buttons; 