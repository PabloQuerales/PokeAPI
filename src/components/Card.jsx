import React, { useState,useEffect } from "react";

export default function Card(props) {
  const [imgPoke, setImgPoke] = useState("")
	const[pokeType, setPokeType] = useState([])
	const[pokeName, setPokeName] = useState("")
	function getPokemon() {
		const requestOptions = {
			method: "GET",
			redirect: "follow"
		};

		fetch(`https://pokeapi.co/api/v2/pokemon/${props.randomNumber}`, requestOptions)
			.then((response) => response.json())
			.then((result) => {
				setImgPoke(result.sprites.other.dream_world.front_default)
				setPokeName((result.name.toUpperCase()))
				setPokeType(result.types)
			})
			.catch((error) => console.error(error));
	}
	useEffect(() => {
		getPokemon();
		
	}, []);
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={imgPoke} className="card-img-top" alt="ditto" />
			<div className="card-body d-flex justify-content-center flex-column align-items-center border-top">
				<h2 className="card-text">{pokeName}</h2>
				<div className="d-flex gap-5">
					{pokeType.map((types)=>{
						return(
							<p>{types.type.name.toUpperCase()}</p>
						)
					})}
				</div>
			</div>
		</div>
	);
}
