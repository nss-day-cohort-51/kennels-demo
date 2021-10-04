import React, { useEffect, useState } from 'react';
import { getAllAnimals, deleteAnimal } from '../../modules/AnimalManager';
import { AnimalCard } from './AnimalCard';
import { useHistory } from 'react-router-dom';

export const AnimalList = () => {
	console.log("AnimalList Invoked")
	const [animals, setAnimals] = useState([])

	const history = useHistory();

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
		<>
		<section className="section-content">
			<button type="button"
				className="btn"
				onClick={() => {history.push("/animals/create")}}>
				Admit Animal
			</button>
		</section>
		<div className="container-cards">
			{animals.map(animal =>
				<AnimalCard key={animal.id} animal={animal} handleDeleteAnimal={handleDeleteAnimal} />)}
		</div>
		</>
	);
};