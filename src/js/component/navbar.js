import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 ms-2 h1"><i className="fa-solid fa-house"></i></span>
			</Link>
			<div className="me-2">
				<div class="btn-group dropstart">
					<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul class="dropdown-menu">
						{
							store.addFavorites.map((element, index) => <li key={index}>{element}
								<i className="fa-solid fa-trash"></i>	
							</li>)
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};
