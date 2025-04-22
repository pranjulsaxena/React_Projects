
import React from 'react'
import Tabs from './tabs'

function Custom_Tab() {
    const data = [{
        label: "Tab 1",
        content: <div className='text-7xl font-bold'>This is Tab 1</div>
    },
    {
        label: "Tab 2",
        content: <h1 className='bg-black text-white px-2 py-4 rounded-2xl border-yellow-200'>Muskuraiye app hai tab 2 par</h1>
    },
    {
        label: "Tab 3",
        content: "Welcome to the Tab 3"
    }
    ]
    return (
        <div>
            <Tabs tabContent={data} />
        </div>
    )
}

export default Custom_Tab
