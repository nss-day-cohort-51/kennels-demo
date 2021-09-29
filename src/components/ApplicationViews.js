import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"

export const ApplicationViews = ( {isAdmin, myUser}) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home isAdmin={isAdmin} myUser={myUser} />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
              <AnimalList />
            </Route>
        </>
    )
}
