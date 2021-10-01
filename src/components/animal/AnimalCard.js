import React from "react"
import "./Animal.css"
import {Link} from 'react-router-dom'
// import Kitten from './images/kitten.jpg';

export const AnimalCard = ({animal, handleDeleteAnimal}) => {
	return (
    <section className="animal card" >
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>  
        <Link to={`/animals/${animal.id}`}>
            <button>Details</button>
        </Link>
        {/* <img src={require('./images/kitten.jpg').default} alt="imageTest"/> */}

        {/* refers to the import above needs to be in the src directory*/}
        {/* <img src={Kitten} alt="test2" /> */}

        {/* located in the public folder */}
        {/* <img src="images/kitten.jpg" alt="test3" /> */}
    </section>
	)
}

/*
Value from let image1 require('./somRelativePath/image.jpg') is different with import calendarPic from './somRelativePath/image.jpg';

If you console them, value from calendarPic is a path, but if you use require, the value is an object.
*/