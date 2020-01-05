import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Part from './components/Part'
import Total from './components/Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
