const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name} you are {props.age} years old</p>
    </div>
  )
}
const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  
  const name = "George"
  const age = 19

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
      <Hello name="Luka" age={15+4}/>
      <Footer />
    </div>
  )
}

export default App