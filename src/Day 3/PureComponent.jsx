import React from 'react'

const PureComponent = (props) => {
    return (
        <div>
            <h4>
                {props.count}
            </h4>
        </div>
    );
}

export default PureComponent;