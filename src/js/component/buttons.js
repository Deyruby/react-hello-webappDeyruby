import React, { useContext } from "react";
 import { Context } from "../store/appContext"




const Buttons= ()=>{
    const { store, actions } = useContext(Context)
    
    const handleNext=()=>{
        actions.getPersonajes(store.infor.next)
    }
    return (
    <>

<div className="container d-flex justify-content-center pb-2">
    <button>Previous</button> 
         <button onClick={()=>handleNext()}>Next</button>
        </div>
    
    </>
)}


export default Buttons; 