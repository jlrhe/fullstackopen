import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    console.log(props)
    return (
        <h1>{props.courseName}</h1>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        
        <div>
            {props.parts.map(part => {
                return (
                    <Part key={part.name} partName={part.name} exerciseCount={part.exercises}/>
                )
            })}
        </div>
    )
}

const Total = (props) => {
    console.log(props)
    let total=0
    props.parts.forEach(part => {
        total=total+part.exercises
    });
    return (
        <p>Number of exercises {total}</p>
    )
}

const Part = (props) => {
    console.log(props)
    return (
        <p>{props.partName} {props.exerciseCount}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
        name: 'Fundamentals of React',
        exercises: 10
        },
        {
        name: 'Using props to pass data',
        exercises: 7
        },
        {
        name: 'State of a component',
        exercises: 14
        }
    ]

    return (
        
        <div>
            <Header courseName={course}/>
            <Content parts={parts}/>
            <Total parts={parts}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))