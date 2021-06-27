import React from 'react'

const Course = ({ course }) => {
  return (
    <section>
      <Header name={course.name}></Header>
      <Content parts={course.parts}></Content> 
    </section>
  )
}

const Header = ({ name }) => {
  return (
    <h2>{name}</h2>
  )
}

//I like the data more as a table
const Content = ({ parts }) => {
  return (
    <div>
      <table>
        <tbody>
          {parts.map((part) => 
            <Part key={part.id} name={part.name} exercises={part.exercises}></Part>
          )}
        </tbody>
        <tfoot>
          <Total parts={parts}></Total>
        </tfoot>
      </table>
    </div>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <tr>
      <td>{name}</td><td>{exercises}</td>
    </tr>    
  )
}

const Total = ({ parts }) => {
  const sum = parts.reduce((sum, part) => sum + part.exercises, 0)
  return(
    <tr>
      <td><b>Total number of exercises</b></td><td><b>{sum}</b></td>
    </tr>
  ) 
}

export default Course;