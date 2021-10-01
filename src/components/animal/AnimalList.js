import React, { useEffect, useState } from 'react';
import { getAllAnimals, deleteAnimal } from '../../modules/AnimalManager';
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

	const handleDeleteAnimal = id => {
		deleteAnimal(id)
			.then(() => getAllAnimals().then(setAnimals));
	};

	useEffect(() => {
		console.log("useEffect Invoked")
		getAnimals();
	}, []);

	return (
		<div className="container-cards">
			{animals.map(animal =>
				<AnimalCard key={animal.id} animal={animal} handleDeleteAnimal={handleDeleteAnimal} />)}
		</div>

	);
};