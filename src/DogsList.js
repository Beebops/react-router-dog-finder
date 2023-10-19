import { Link } from 'react-router-dom'

export default function Dogslist({ dogs }) {
  return (
    <div className="DogList-container">
      <h1>Meet The Dogs</h1>
      <div className="DogList-dogs">
        {dogs.map((dog) => (
          <div className="DogList-dog">
            <h2 key={dog.name}>{dog.name}</h2>
            <Link to={`dogs/${dog.name}`}>
              <img
                src={`${process.env.PUBLIC_URL}/images/${dog.src}`}
                alt={dog.name}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
