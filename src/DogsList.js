import { Link } from 'react-router-dom'

export default function Dogslist({ dogs }) {
  return (
    <div className="DogList-container">
      <h1>Dogs List</h1>

      {dogs.map((dog) => (
        <Link to={`dogs/${dog.name}`}>
          <div className="DogList-dog">
            <h2 key={dog.name}>{dog.name}</h2>
            <img
              src={`${process.env.PUBLIC_URL}/images/${dog.src}`}
              alt={dog.name}
            />
          </div>
        </Link>
      ))}
    </div>
  )
}
