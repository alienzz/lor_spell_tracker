import React from 'react'
import {FlexboxGrid} from 'rsuite'

const Card = ({ data }) => {
    const url = data.assets[0].gameAbsolutePath.replace('http', 'https')
    return (
        <FlexboxGrid.Item>
            <img 
                style={{height: 300}}
                src={url} 
                alt={data.name}
            />
        </FlexboxGrid.Item>
    )
}

export default Card