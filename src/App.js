import React from "react"

// components
import AddInstructor from "./components/AddInstructor"
import InstructorsList from "./components/InstructorsList"

// items
import INSTRUCTORS from "./data"

// redux stuff
import { createStore } from "redux"
import { Provider } from "react-redux"

// Import actions
import { ADD_INSTRUCTOR } from "./actions"

// reducer
import reducer from "./reducer"

const store = createStore(reducer, INSTRUCTORS)

const addInstructor = () => {
  console.log("In add instructor.")
}

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Nucamp Instructors</h1>
        <hr />
        <AddInstructor addInstructor={addInstructor} />
        <hr />
        <InstructorsList instructors={INSTRUCTORS} />
      </div>
    </Provider>
  )
}

export default App
