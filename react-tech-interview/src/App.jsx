import React, { useEffect, useState } from 'react'
import './App.css'
const FACT_API = `https://catfact.ninja/fact`
const IMAGES_API = `https://cataas.com/cat/says/`


export const App = () => {
    const [fact, setfact] = useState()
    const [image, setImage] = useState()
    useEffect(() => {
        fetch(FACT_API)
            .then((res) => res.json())
            .then((data) => {
                setfact(data.fact)
            })
    }, [])

    useEffect(() => {
        if (!fact) return
        const threewords = fact.split(' ').slice(0, 3).join('')
        const newEndpoint = `${IMAGES_API}${threewords}`

        fetch(newEndpoint)
            .then(response => {
                setImage(response.url)
            })
    }, [fact])


    return (
        <main>
            <h1>App Cats</h1>
            {fact && <p>{fact}</p>}
            {image && <img src={image} alt={`Image fetched from the Cats URL with this fact a base:${fact}`}></img>}
        </main>
    )
}
