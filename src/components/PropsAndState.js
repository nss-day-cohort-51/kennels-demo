import React, { useState } from "react"
import './PropsAndState.css'

export const PropsAndState = ({ myUser }) => {
	let [countClicks, setCountClicks] = useState(0);
	let [colorIndex, setColorIndex] = useState(0);
	// let [info, setInfo ] = useState({})
	let [saveNow, setSaveNow] = useState(false)

	const allColors = ['red', 'blue', 'orange'];
	const handleClick = () => {
		//good practice:
		//make a copy of state, modify it, and then setState to the copy
		const newCountClicks = ++countClicks
		setCountClicks(newCountClicks);

		let newColorIndex = ++colorIndex;
		if (newColorIndex > allColors.length - 1) {
			newColorIndex = 0;
		}
		setColorIndex(newColorIndex);
	}

	const handleChange = (event) => {
		console.log("what is event", event.target.value)
		let newSaveNow = saveNow;
		newSaveNow = true;
		setSaveNow(newSaveNow);

		//above is the same as this
		// setSaveNow(true);
	}

	return (
		<>
			{console.log("return again")}
			<h3>Welcome, {myUser.name} and {myUser.pet}</h3>
			<p>Today is beautiful</p>

			<p className={allColors[colorIndex]}>{countClicks}</p>
			<button onClick={(handleClick)}>Click Me</button>
			<hr/>
			<hr/>
			<hr/>

			<div>
				<textarea type="text" name="notes" placeholder='notes' onChange={handleChange}/>
				<button id="save" disabled={saveNow ? false : true}>Save Note</button>
			</div>

		</>
	)
}