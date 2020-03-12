import React, { Component } from 'react'
import interfaceProject from '../assets/interface_mockup.png'

export default class Interface extends Component {
  render() {
    return (
      <div className="interface">
        <div className="projectText">
          <h1 className="project_title">Interface</h1>
          <p>Interface was a project I completed in a group of five people. </p>
        </div>
        <img src={interfaceProject} className="interface_image"></img>
      </div>
    )
  }
}
