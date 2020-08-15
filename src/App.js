import React, { useState } from 'react'
import 'rsuite/dist/styles/rsuite-dark.css'
import set1 from './assets/set1-en_us.json'
import set2 from './assets/set2-en_us.json'
import Card from './Card'
import { CheckPicker, FlexboxGrid, InputNumber } from 'rsuite'

const data = [...set1, ...set2].filter(c => c.type === "Spell").sort((a, b) => a.cost - b.cost)

const addedRegions = []
const regions = []

data.forEach(card => {
    if (!addedRegions.includes(card.region)) {
        regions.push({
            value: card.region,
            label: card.region,
            key: card.region,
        })
        addedRegions.push(card.region)
    }
})

const App = () => {
    const [selectedRegions, setSelectedRegions] = useState([])
    const [mana, setMana] = useState(0)
    return (
        <div style={{padding: "1rem"}}>
            <FlexboxGrid justify="start" style={{marginBottom: "2rem"}}>
                <FlexboxGrid.Item style={{marginRight: "1rem"}}>
                    <CheckPicker
                        style={{width: 300}}
                        value={selectedRegions}
                        onChange={setSelectedRegions}
                        data={regions}
                    />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                    <InputNumber 
                        style={{width: 300}}
                        value={mana}
                        onChange={setMana}
                    />
                </FlexboxGrid.Item>
            </FlexboxGrid>
            <FlexboxGrid justify="start">
                {data.filter(c => selectedRegions.includes(c.region) && c.cost <= mana).map(card => <Card key={card.cardCode} data={card} />)}
            </FlexboxGrid>
        </div>
    );
}

export default App