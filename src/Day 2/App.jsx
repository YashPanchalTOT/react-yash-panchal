import React from 'react'
import User from '../Day 2/User'

const App = (props) => {
    return (
        <>
            <User title="FirstName" value={props.firstName}></User><br/>
            <User title="LastName" value={props.lastName}></User><br/>
            <User title="City" value={props.city}></User><br/>
            <User title="State" value={props.state}></User><br/>
            <User title="Country" value={props.country}></User>
        </>
    );
}

export default App;