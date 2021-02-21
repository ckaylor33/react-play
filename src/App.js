import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// Valid JSX: null, numbers, HTML, strings, arrays
// declarative framework -> should not be working with direct DOM APIs like getElementById etc

const array = [1, 2, 3, 4, 5]

const arr = [
  { name: 'charlie', rollnumber: 1 },
  {
    name: 'jen',
    rollnumber: 2,
  },
]

function GreetComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      {props.children}
    </div>
  )
}

function App() {
  // keep effects, states and hooks at the top
  // template in the middle
  // functional code or logic at the bottom
  console.log(<div>JSX Yeaaaa {2 + 2}</div>)
  //-> console.log(React.createElement('div', {any props}, 'JSX Yeaaaa', 2 + 2))
  const [counter, setCounter] = useState(0) // 0 <-- [0, fn]
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  let message = ''
  if (name === 'admin' && password === 'admin') {
    message = 'Hello admin!'
  } else {
    message = 'Go Away!'
  }
  function buttonWasClicked(event) {
    setCounter(counter + 1)
  }
  function Home() {
    return <h1>Home</h1>
  }
  function About() {
    return <h1>About</h1>
  }

  return (
    // JS = UI + logic
    //  CSS = seperate / JS + CSS
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
      <div>
        <h1>Type admin admin in the form below for conditional rendering!</h1>
        <br />
        <span>{message}</span> <br />
        <span style={{ display: 'inline-block', padding: '10px 0' }}>
          {name === 'admin' &&
            password === 'admin' &&
            `It's still the admin, yay!`}
        </span>
        <br />
        <button onClick={buttonWasClicked}>Button</button>
        <h1>
          Hello world
          {1 + 1 > 5 ? (
            <p>Well, this prints</p>
          ) : (
            <p>That didn't go well did it?</p>
          )}
        </h1>
        <h2>
          {array.map((num) => (
            <div>{num ** 2}</div>
          ))}
        </h2>
        <h1>{counter}</h1>
      </div>
      <div>
        <input type='text' value={name} onChange={updateTextField} />
        <input
          type='password'
          value={password}
          onChange={updatePasswordField}
        />
        <button onClick={submitForm}>Submit Form</button>
        <br />
        <GreetComponent name='Charlie' x='12tentwenty' z={[1, 2, 3, 4, 5]}>
          <p>This is the children of the prop :)</p>
        </GreetComponent>
      </div>
      <ul>
        {arr.map((elem) => (
          <li key={elem.rollnumber}>
            {elem.rollnumber} - {elem.name}
          </li>
        ))}
      </ul>
    </>
  )
  // have to use function keyword for it to be hoisted and used above
  // have to bring in event into function to get DOM value from API
  function submitForm() {
    console.log(name, password)
  }
  function updateTextField(event) {
    setName(event.target.value)
  }
  function updatePasswordField(event) {
    setPassword(event.target.value)
  }
}

export default App
