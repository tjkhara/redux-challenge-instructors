import React, { useRef } from "react"
import { connect } from "react-redux"
import { ADD_INSTRUCTOR } from "../actions"

const AddInstructor = props => {
  const refName = useRef(null)
  const refCourse = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    console.log("In handle submit")
    props.dispatch({
      type: ADD_INSTRUCTOR,
      payload: {
        name: refName.current.value,
        id: 4,
        color: "purple",
        course: refCourse.current.value
      }
    })
    e.target.reset()
  }

  return (
    <div>
      <h2>There are {props.numberOfInstructors} instructors.</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name </label>
        <input id="name" type="text" ref={refName} />
        <label htmlFor="course"> Course Taught: </label>
        <input id="course" type="text" ref={refCourse} />
        <button type="submit"> Add Instructor</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return { numberOfInstructors: state.length }
}

export default connect(mapStateToProps)(AddInstructor)
