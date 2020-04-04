import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//TODO: put the components in some kind of logical order for readability

//I have tried to make the components as reusable as possible, but I didn't go overboard with it. I don't want to drown this early in the course.


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

//displays only from objects that have number values
const DisplayEntries = ({valuesObject}) => {
  let entries = Object.entries(valuesObject)

  return (
    <>
      {entries.map(entry => (
        <DisplayNumber key={entry[0]} text={entry[0]} number={entry[1]} />//I keep thinking there's something wrong with this mapping but it works without errors, so I guess it's good enough
      ))}
    </>
  )
}

//takes an object with number values, error handling is not relevant at this point of the course
const Statistics = ({valuesObject}) => {
  let total = 0
  let i = 0
  let values = Object.values(valuesObject)
  

  for (i = 0; i < values.length; i++) {
    total = total + values[i]
  }

  //this is just for the assignment, I think my solution in the DisplayNumber component is more elegant
  if (total === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  let average = (valuesObject.good - valuesObject.bad)/total //this is special average for this app - not a normal average.
  let positivePercentage = parseInt(valuesObject.good/total*10000)/100 //I know there's a rounding function but I can't be bothered to look it up
 
  return (
    <>
    <Headline text="Statistics" />
    <DisplayEntries valuesObject={valuesObject} />
    <DisplayNumber text="Average (good = 1, bad = -1)" number={average} />
    <DisplayNumber text="positive" number={positivePercentage} symbol="%" />
    </>
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

  //this could (should) be Map... let's see if I have the time and energy to refactor
  let combinedClicks = {
    good: good,
    neutral: neutral,
    bad: bad
  }

   
  return (
    <div className="container">
      <Headline text="Give Feedback" />
      <Button text="Good" handleClick={incrementGood}></Button>
      <Button text="Neutral" handleClick={incrementNeutral}></Button>
      <Button text="Bad" handleClick={incrementBad}></Button>
      
      
      <Statistics valuesObject={combinedClicks} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)