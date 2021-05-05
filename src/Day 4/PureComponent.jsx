import React from 'react'

const PureComponent = (props) => {
    const { countNum } = props
    return (
        <div>
            <h3>{countNum}</h3>
        </div>
    );
}      

export default PureComponent;