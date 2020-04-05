import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const DisplayAnecdote = ({anecdotes, index}) => <p>{anecdotes[index]}</p>

const DisplayVotes = ({votes, index}) => <p>This anecdote has {votes[index]} votes.</p>

const App = (props) => {

  const anecdoteCount = anecdotes.length

  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdoteCount))
  const [votes, setVotes] = useState(new Array(anecdoteCount).fill(0))

  const voteAnecdote = () => {
    let newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const randomNewIndex = (lenght, previous) => {
    let result
    //if you can get this to loop forever go fill a lottery ticket
    do {
      result = Math.floor(Math.random() * lenght)
    } while (result === previous)
    return result
  }

  const randomizeAnecdote = () => setSelected(randomNewIndex(anecdoteCount, selected))

  let mostVotes = Math.max(...votes)

  let mostVotesIndex = votes.indexOf(mostVotes)


  //as per the assignment only one of the anecdotes with most votes is shown in case of ties
  return (
    <div className="container">
      <h1>Anecdotes</h1>
      <DisplayAnecdote anecdotes={props.anecdotes} index={selected} />
      <DisplayVotes votes={votes} index={selected}></DisplayVotes>
      <Button text="Vote" handleClick={voteAnecdote}></Button>
      <Button text="Next (random) anecdote" handleClick={randomizeAnecdote}></Button><br/><br/>
      <h2>Anecdote with most votes:</h2>
      <DisplayAnecdote anecdotes={props.anecdotes} index={mostVotesIndex} />
      <DisplayVotes votes={votes} index={mostVotesIndex}></DisplayVotes>
    </div>

  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)