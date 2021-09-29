import React, { useEffect, useState } from 'react';
import { getAllAnimals } from '../../modules/AnimalManager';
import { AnimalCard } from './AnimalCard';

export const AnimalList = () => {
	console.log("AnimalList Invoked")
	const [animals, setAnimals] = useState([])

	const getAnimals = () => {
		console.log("getAnimals Invoked")
		return getAllAnimals().then(animalsFromAPI => {
			// We'll do something more interesting with this data soon.
			console.log(animalsFromAPI);
			setAnimals(animalsFromAPI);
		});
	};

	useEffect(() => {
		console.log("useEffect Invoked")
		getAnimals();
	}, []);

	return (
		<div className="container-cards">
			{console.log("return time")}
			<div className="container-cards">
				{animals.map(animal => <AnimalCard key={animal.id} animal={animal}/>)}
			</div>
		</div>
	);
};