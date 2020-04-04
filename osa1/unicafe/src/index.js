import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Headline = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Counter = ({text, count}) => <p>{text} {count}</p>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementBad = () => setBad(bad +1)  
  const incrementNeutral = () => setNeutral(neutral +1)

  return (
    <div className="container">
      <Headline text="Give Feedback" />
      <Button text="Good" handleClick={incrementGood}></Button>
      <Button text="Neutral" handleClick={incrementNeutral}></Button>
      <Button text="Bad" handleClick={incrementBad}></Button>
      <Headline text="Statistics" />
      <Counter text="Good" count={good} />
      <Counter text="Neutral" count={neutral} />
      <Counter text="Bad" count={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)