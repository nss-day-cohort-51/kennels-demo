import React from "react"
import "./Kennel.css"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

const isAdmin = true;

//example of object being passed
const myUser = {
    name:"Brenda",
    pet:"Basil"
}

export const Kennel = () => {
	return (
        <>
            <NavBar />
            <ApplicationViews isAdmin={isAdmin} myUser={myUser} />
        </>
	)
}