import { ADD_INSTRUCTOR } from "./actions"
import INSTRUCTORS from "./data"

const reducer = (state = INSTRUCTORS, action) => {
  console.log({ state, action })

  if (action.type === "ADD_INSTRUCTOR") {
    console.log("It worked")
    return state.concat({
      name: action.payload.name,
      id: state.length,
      color: "#000",
      course: action.payload.course
    })
  }

  return state
}

export default reducer
