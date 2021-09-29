import React from "react"
import "./Animal.css"
// import Kitten from './images/kitten.jpg';

export const AnimalCard = ({animal}) => {
	return (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>

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