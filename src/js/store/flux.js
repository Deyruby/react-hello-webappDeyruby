import { element } from "prop-types";
import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			personaje: {},
			infor: {},
			addFavorites: [],

		},
		actions: {
			// Use getActions to call a function within a fuction


			getPersonajes: (url) => {
				fetch(url, {
					method: "GET",
					headers: {
						"content-type": "application/json",
					},
				}).then((response) => {
					return response.json()
				}).then((data) => {
					setStore({ personajes: data.results })
					setStore({ infor: data.info })
				}).catch((error) =>
					console.log(error));
			},

			getpersonaje: (id) => {
				fetch(`https://rickandmortyapi.com/api/character/${id}`, {
					method: "GET",
					headers: {
						"content-type": "application/json",
					},
				}).then((response) => {
					return response.json()
				}).then((data) => {
					setStore({ personaje: data })
					console.log("data", data)
				}).catch((error) =>
					console.log(error));
			},

			addtoFavorites: (name) => {
				const favoritos = getStore().addFavorites
				if (favoritos.length == 0){
					favoritos.push(name)
					
				}
				else{
                    
					let find = false;
					for (let i = 0; i < favoritos.length; i++) {
						if (favoritos[i] == name) {
							console.log("NO ENCONTRO EL NOMBRE")
							find = true;
							break;
				
						}
						
					}
					if (find == false){
						favoritos.push(name)
					}
				}
				setStore({ addFavorites: favoritos })
			},

			removeFavorites: (deleteFavorites) => {
				const updateFavorites = getStore().addFavorites
				const newUpdate = updateFavorites.filter((element) => element !== deleteFavorites)
				setStore({ addFavorites: newUpdate })

			},



		}

   }
}
export default getState;
