import React from 'react'

export default function ConvestString({ word }) {
    return (
        <div dangerouslySetInnerHTML={{ __html: word }} />
    )
}
