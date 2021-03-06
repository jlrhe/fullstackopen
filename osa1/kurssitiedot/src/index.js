//this was done (along with part 0) already in the summer of 2019. I looked through it and made sure I understood what I had done and that it worked.
import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    console.log(props)
    return (
        <h1>{props.courseName.name}</h1>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        
        <div>
            {props.courseName.parts.map(part => {
                return (
                    //part.name as a key is less than optimal, but I think we'll come back to this later
                    <Part key={part.name} partName={part.name} exerciseCount={part.exercises}/>
                )
            })}
        </div>
    )
}

const Total = (props) => {
    console.log(props)
    let totalExercises = 0
    props.courseName.parts.forEach(part => {
        totalExercises=totalExercises+part.exercises
    });
    return (
        <p>Number of exercises {totalExercises}</p>
    )
}

const Part = (props) => {
    console.log(props)
    return (
        <p>{props.partName} {props.exerciseCount}</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
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
    }

    return (
        <div>
            <Header courseName={course}/>
            <Content courseName={course}/>
            <Total courseName={course}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))