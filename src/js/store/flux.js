import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			personaje: {},
			infor: {},
			addFavorites:[],

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
					setStore( {infor: data.info})
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

			addtoFavorites: (name) =>{
				console.log(name)
			const favoritos = 	getStore().addFavorites
			favoritos.push(name)
			setStore({addFavorites : favoritos })
			},

			removeFavorites: (deleteFavorites) => {
				const {addFavorites} = getStore()
				const updateFavorites = addFavorites.filter((favorites)=> favorites.id !== deleteFavorites.id)
				setStore({addFavorites: updateFavorites})

			}


			
		}

	}
};


export default getState;
