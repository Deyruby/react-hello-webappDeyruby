import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import Card from "../component/card";
import { Context } from "../store/appContext"
import Buttons from "../component/buttons";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.getPersonajes("https://rickandmortyapi.com/api/character")
		console.log("Personajes", store.personajes)
	}, [])
	return (
		<>
			<h1>Rick and Morty Series</h1>
			<Buttons/>
			<div className="container">
				<div className="row">
					{store.personajes.map((item, index) => {
						return (
							<div className="col-3 pb-3">
								<Link to={"/single/"+ item.id} >
									<Card
										img={item.image}
										title={item.name}
										text={item.status}
										buttonUrl={"https://getbootstrap.com/"}
										buttonLabel={"Add to Favorites"}
									/>
								</Link>

							</div>)
					})}

				</div>
			</div>
		</>
	);
}