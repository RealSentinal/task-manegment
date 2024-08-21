import React from 'react'

interface Props {
    title: string
    priority: string
    tags: Tags[]
    image?: any
    comments?: any
}

interface Tags {
    name: string
    bg_color: string
}

function task(props: Props) {
    return (
        <div className='w-5/12'>
            <h1>{props.title}</h1>
        </div>
    )
}

export default task