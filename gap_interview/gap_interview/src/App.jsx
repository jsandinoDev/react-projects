import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
import { Card } from './Card';

const API = `https://jsonplaceholder.typicode.com/comments`


function App() {

    const [data, setdata] = useState()
    const [likes, setlikes] = useState(0)
    const callAPI = async () => {
        const response = await fetch(API);
        const data1 = await response.json();
        const filterData = data1.slice(1, 10);
        setdata(filterData)
    }

    useEffect(() => {
        callAPI()
    }, [])

    const handleonLikeToggle = (like) => {
        setlikes((prevLikes) => prevLikes + (like ? 1 : -1));
    }

    return (
        <>
            <h1>Hi</h1>
            <h3>Number of likes: {likes}</h3>
            {
                data && data.map(x => (
                    <Card key={x.id} username={x.name} body={x.body} onLikeToggle={handleonLikeToggle} />
                ))
            }


        </>
    )
}

export default App
