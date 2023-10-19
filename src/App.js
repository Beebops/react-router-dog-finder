import { Routes, Route } from 'react-router-dom'
import DogsList from './DogsList'
import Dog from './Dog'
import NavBar from './NavBar'

function App() {
  return (
    <>
      <NavBar dogs={dogs.dogs} />
      <Routes>
        <Route path="/*" element={<DogsList dogs={dogs.dogs} />} />
        <Route path="dogs/" element={<DogsList dogs={dogs.dogs} />} />
        <Route />
        <Route path="dogs/:name" element={<Dog dogs={dogs.dogs} />} />
      </Routes>
    </>
  )
}
export default App

const dogs = {
  dogs: [
    {
      name: 'Whiskey',
      age: 5,
      src: 'whiskey.jpg',
      facts: [
        'Whiskey loves eating popcorn.',
        'Whiskey is a terrible guard dog.',
        'Whiskey wants to cuddle with you!',
      ],
    },
    {
      name: 'Duke',
      age: 3,
      src: 'duke.jpg',
      facts: [
        'Duke believes that ball is life.',
        'Duke likes snow.',
        'Duke enjoys pawing other dogs.',
      ],
    },
    {
      name: 'Perry',
      age: 4,
      src: 'perry.jpg',
      facts: [
        'Perry loves all humans.',
        'Perry demolishes all snacks.',
        'Perry hates the rain.',
      ],
    },
    {
      name: 'Tubby',
      age: 4,
      src: 'tubby.jpg',
      facts: [
        'Tubby is really stupid.',
        'Tubby does not like walks.',
        'Angelina used to hate Tubby, but claims not to anymore.',
      ],
    },
  ],
}
