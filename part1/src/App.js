const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}



const Part = (props) => {
  return(
    <>
          <p>{props.name} {props.exercises}</p>
  </>
  )
}

const Content = (props) => {
  return(
    <>
    <Part name = {props.parts[0].part} exercises = {props.parts[0].exercises} />
    <Part name = {props.parts[1].part} exercises = {props.parts[1].exercises} />
    <Part name = {props.parts[2].part} exercises = {props.parts[2].exercises} />
  </>
  )
}

const Total = (props) => {
  const totalExercises = props.exercises.reduce((sum, exercise) => sum + exercise.exercises, 0);
  return(
    <>
          <p>Number of exercises { totalExercises}</p>
  </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {part : 'Fundamentals of React', exercises : 10},
    {part : 'Using props to pass data', exercises : 7},
    {part : 'State of a component', exercises : 14},
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises = {parts} />
    </div>
  )
}

export default App