

const Car = (props) => {
    const {name, year, milage} = props
    console.log(props)
  return (
    <div>
        <img src="" alt=""/>
        <p>Name:{name}</p>
        <p>Year:{year}</p>
        <p>Milage:{milage}</p>
    </div>
  )
}

export default Car