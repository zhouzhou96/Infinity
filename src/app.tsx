import React from 'react'
import Login from './Pages/Login'

interface IProps {
  name: string
  age: number
}

export default function App(props: IProps) {
  const { name, age } = props
  return (
    <div className="app">
      <span>{`Hello I'm ${name}, ${age} years old.`}</span>
      <Login />
    </div>
  )
}
