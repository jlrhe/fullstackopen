import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Headline = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const DisplayNumber = ({text, number , symbol}) => {
  if (isNaN(number)) {
    return (
      <p>{text} is not defined.</p>
    )
  }
  
  return (
    <p>{text} {number} {symbol}</p>
  )
} 

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementBad = () => setBad(bad +1)  
  const incrementNeutral = () => setNeutral(neutral +1)

  //arithmetic is so simple that I think it's not necessary to have average counting as it's own module
  //also this let's me reuse the module I made to show the numbers
  let totalAnswers = good + bad + neutral
  let average = (good - bad)/totalAnswers //could round this, but I don't feel like it

  let positivePercentage = good/totalAnswers*100
  
  return (
    <div className="container">
      <Headline text="Give Feedback" />
      <Button text="Good" handleClick={incrementGood}></Button>
      <Button text="Neutral" handleClick={incrementNeutral}></Button>
      <Button text="Bad" handleClick={incrementBad}></Button>
      <Headline text="Statistics" />
      <DisplayNumber text="Good" number={good} />
      <DisplayNumber text="Neutral" number={neutral} />
      <DisplayNumber text="Bad" number={bad} />
      <DisplayNumber text="Average" number={average} />
      <DisplayNumber text="positive" number={positivePercentage} symbol="%" />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)