import { NavLink } from 'react-router-dom'

export default function NavBar({ dogs }) {
  return (
    <nav>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.name}>
            <NavLink to={`/dogs/${dog.name}`} activeclassname="active">
              {dog.name}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink to="/dogs">Home</NavLink>
        </li>
      </ul>
    </nav>
  )
}
