import React from "react";
import { PropsAndState } from './PropsAndState'

export const Home = ({isAdmin, myUser}) => (
    <>
        {isAdmin ? 
        <>
            <p>You are an admin</p>

            <h2>Nashville Kennels</h2>
            <small>Loving care when you're not there.</small>

            <address>
                <div>Visit Us at the Nashville North Location</div>
                <div>500 Puppy Way</div>
            </address>

            <PropsAndState myUser={myUser} />
        </>
        : <p>You are not an admin</p> 
        }
    </>
)