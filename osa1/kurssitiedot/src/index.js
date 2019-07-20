import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.courseName}</h1>
    )
}

const Content = (props) => {
    return (
        //this should be a loop
        <div>
            <p>{props.partName1} {props.exerciseCount1}</p>
            <p>{props.partName2} {props.exerciseCount2}</p>
            <p>{props.partName3} {props.exerciseCount3}</p>
        </div>
    )
}

const Total = (props) => {
    return (
        <p>Number of excersises {props.totalExercises}</p>
    )
}

const App = () => {
    //intended or not I'm constantly thinking half ass application development when I see this
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        
        <div>
            <Header courseName={course}/>
            {
                //this is so ugly I'd puke if it wasn't temporary and getting fixed in the next part of the assignment
            }
            <Content partName1={part1} partName2={part2} partName3={part3} exerciseCount1={exercises1} exerciseCount2={exercises2} exerciseCount3={exercises3}/>
            <Total totalExercises={exercises1 + exercises2 + exercises3}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))