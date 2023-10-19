import { useParams } from 'react-router-dom'

export default function Dog({ dogs }) {
  const { name } = useParams()

  const dog = dogs.find((dog) => dog.name === name)

  if (!dog) return <div>Dog not found</div>

  return (
    <div className="Dog">
      <h1>All About {name}</h1>
      <img src={`${process.env.PUBLIC_URL}/images/${dog.src}`} />
      <div>
        {dog.facts.map((fact) => (
          <p>{fact}</p>
        ))}
      </div>
    </div>
  )
}
