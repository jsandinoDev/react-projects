import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './Card'

const API = `https://jsonplaceholder.typicode.com/comments`

function App() {

    const [data, setData] = useState()
    const [likes, setLikes] = useState(0)

    const callAPI = async () => {
        const response = await fetch(API)
        const response_data = await response.json()
        const data_filter = response_data.slice(1, 10)
        setData(data_filter)
    }


    useEffect(() => {
        callAPI()
    }, [])

    useEffect(() => {
        console.log('Data Changed');
        console.log(data);
    }, [data])


    const handleLikeToogle = (like) => {
        setLikes(likes + (like ? 1 : -1))
    }

    return (
        <>
            <h3>GAP INTERVIEW</h3>

            <p>Likes count:  {likes}</p>
            {
                data &&
                data.map((quote) => (
                    <Card key={quote.id} username={quote.name} comment={quote.body} onToogleLike={handleLikeToogle} />
                ))
            }
        </>
    )
}

export default App
