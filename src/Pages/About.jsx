import React from 'react'
import { useParams } from 'react-router-dom'

function About() {
  const params = useParams()
  console.log(params)
  return (
    <div>About page</div>
  )
}

export default About