import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./Card";

const API: string = `https://jsonplaceholder.typicode.com/comments`;
type CardData = {
  id: number;
  name: string;
  body: string;
};

function App() {
  const [data, setData] = useState<CardData[]>([]);
  const [likes, setLikes] = useState(0);

  const callAPI = async () => {
    const response = await fetch(API);
    const response_data = await response.json();
    const newData = response_data.slice(1, 10);
    setData(newData);
    console.log(newData);
  };

  useEffect(() => {
    callAPI();
  }, []);

  const hableToggleClick = (e_like: boolean) => {
    setLikes(likes + (e_like ? +1 : -1));
  };

  return (
    <>
      <div>
        <h1>GAP INTERVIEW REACT</h1>
        <p>Likes: {likes}</p>

        {data &&
          data.map((carElement) => (
            <Card
              key={carElement.id}
              username={carElement.name}
              body={carElement.body}
              toggleClick={hableToggleClick}
            />
          ))}
      </div>
    </>
  );
}

export default App;
