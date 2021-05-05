import React from 'react'

const ParaComponent = (props) => {
    const { userId, detailBody } = props;
     
    return(
        <p>{userId}: {detailBody}</p>
    )

}

export default ParaComponent;