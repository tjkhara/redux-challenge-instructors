import React, { Component } from "react"

export default class Instructor extends React.Component {
  render() {
    let style = { background: this.props.instructor.color }
    return (
      <p style={style} className="instructor">
        {this.props.instructor.name} - {this.props.instructor.course}
      </p>
    )
  }
}
