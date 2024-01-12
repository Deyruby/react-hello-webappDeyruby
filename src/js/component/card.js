import React from "react";
import "../../styles/home.css";


const Card = (props) =>{
    return(
    <div className="card" style= {{"width": "18rem;" }}>
				<img src={props.img} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text"> {props.text}  </p>
					<a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
				</div>
			</div>
)}

export default Card; 