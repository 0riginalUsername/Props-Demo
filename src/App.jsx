import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './Car.jsx'
import axios from 'axios'


function App() {
  const [pic, setPic] = useState()
  useEffect (() => {
    console.log('Use effect hit');

    axios.get('https://pokeapi.co/api/v2/pokemon/squirtle')
    .then((res) => {
      console.log(res.data);
      setPic(res.data.sprites.front_default)
    })
  },[])

  let myCars = [
    {
      name: 'Miata',
      year: 1992,
      miles: 180000
    },
    {
      name: 'Taurus',
      year: 'old',
      miles: 100000
    },
    {
      name: 'Suburban',
      year: 2023,
      miles: 20
    }
  ]

 const car = myCars.map((car) => {

 
  return (
    <>

    <Car 
      name={car.name}
      year={car.year}
      milage={car.milage}
    />
    <Car 
      name={car.name}
      year={car.year}
      milage={car.milage}
    />
    <Car 
      name={car.name}
      year={car.year}
      milage={car.milage}
    />
    </>
  )
})
return(
  <>
  <img src={pic}/>
  {car}
  </>
)
}

export default App
