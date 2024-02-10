import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";


    const Card = (props) => {
	const navigate = useNavigate()
	const { store, actions } = useContext(Context)

	const goToDetails = (id) => {
		navigate("/single/" + id)
	}
	return (
		<div className="card" style={{ "width": "18rem;" }}>
			<img onClick={() => goToDetails(props.id)} src={props.img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text"> {props.text}  </p>
				<button className="btn btn-info" onClick={()=> actions.addtoFavorites(props.title)}>Add to Favorites</button>
			</div>
		</div>
	)
}

export default Card; 