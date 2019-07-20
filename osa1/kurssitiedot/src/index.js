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
            <Part partName={props.partName1} exerciseCount={props.exerciseCount1}/>
            <Part partName={props.partName2} exerciseCount={props.exerciseCount2}/>
            <Part partName={props.partName3} exerciseCount={props.exerciseCount3}/>
        </div>
    )
}

const Total = (props) => {
    return (
        //not sure if I'm supposed to do the addition here or in the App as is, but I imagine it doesn't really matter at this point
        <p>Number of excersises {props.totalExercises}</p>
    )
}

const Part = (props) => {
    return (
        <p>{props.partName} {props.exerciseCount}</p>
    )
}

const App = () => {
    //intended or not I'm constantly thinking half ass application development when I see this. The course material says we'll improve on this so I won't bother doing anything about it at this time
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
                //not sure how much I'm allowed to improve over the material given, but I would really love to make some loops
            }
            <Content partName1={part1} partName2={part2} partName3={part3} exerciseCount1={exercises1} exerciseCount2={exercises2} exerciseCount3={exercises3}/>
            <Total totalExercises={exercises1 + exercises2 + exercises3}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))