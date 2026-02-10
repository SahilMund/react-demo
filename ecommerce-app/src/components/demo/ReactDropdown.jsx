import React, { useState } from 'react'

const STATE_DATA = [{
    id: 1,
    label: "Telengana",
    cities: [{
        id: 100,
        label: "Hyderabad 1",
    }, {
        id: 101,
        label: "Hyderabad 2",
    }]
}, {
    id: 2,
    label: "Karnataka",
    cities: [{
        id: 200,
        label: "Bengaluru 1",
    }, {
        id: 201,
        label: "Bengaluru 2",
    }]
}]

const ReactDropdown = () => {
    const [activeState, setActiveState] = useState(null);

    const handleDropDownChange = (e) => {
        const selectedId = e.target.value;
        const selectedState = STATE_DATA.find((s) => s.id === Number(selectedId))
        setActiveState(selectedState)
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px"
        }}>
            <select
                onChange={handleDropDownChange}
            >
                <option disabled>Select State</option>
                {
                    STATE_DATA.map((state) => (<option key={state.id} value={state.id}>{state.label}</option>))
                }
            </select>
            <select
                disabled={!activeState}
            >
                <option disabled>Select City</option>
                {
                    activeState?.cities?.map((state) => (<option key={state.id}>{state.label}</option>))
                }
            </select>
        </div>
    )
}

export default ReactDropdown