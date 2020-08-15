import React from 'react'
import {FlexboxGrid} from 'rsuite'

const Card = ({ data }) => {
    return (
        <FlexboxGrid.Item>
            <img 
                style={{height: 300}}
                src={data.assets[0].gameAbsolutePath} 
                alt={data.name}
            />
        </FlexboxGrid.Item>
    )
}

export default Card