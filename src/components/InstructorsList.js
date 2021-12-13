import React from "react"
import Instructor from "./Instructor"
import { connect } from "react-redux"

const InstructorsList = ({ instructors = [] }) => {
  return (
    <ul>
      {instructors.map(instructor => (
        <li key={instructor.id}>
          <Instructor instructor={instructor} />
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = state => {
  return { instructors: state }
}

export default connect(mapStateToProps)(InstructorsList)
