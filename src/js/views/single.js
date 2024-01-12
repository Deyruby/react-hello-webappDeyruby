import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single =() => {
	const { store, actions } = useContext(Context);
	const {id} = useParams();
	
	useEffect( ()=>{
		actions.getpersonaje(id)
	}, [])
	
	
	return (
		<>
		<h1>{store.personaje.name}</h1>
		<div className="d-flex justify-content-center pt-5">
         <img src = {store.personaje.image}/>
		 <div className="card" style= {{"width": "18rem;" }}>
  <ul className="list-group list-group-flush">
    <li className=" list-group-item"><p className=" fw-bold">Status: {store.personaje.status}</p></li>
    <li className="single2 list-group-item"><p className="fw-bold">Gender: {store.personaje.gender}</p></li>
  <li className="single3 list-group-item"><p className="fw-bold">Species: {store.personaje.species}</p></li>
  <li className="single3 list-group-item"><p className="fw-bold">Location: {store.personaje.location?.name}</p></li>
  </ul> 
  <div className=" d-flex justify-content-center pt-5">
    <button className="btn btn-info">Add to Favorites</button>
  </div>
</div>
       
	    </div>
		
		</>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
