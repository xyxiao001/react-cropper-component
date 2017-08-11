import React, { Component } from 'react'
import Cropper from './react-cropper'

// 引入scss
import './demo.css'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">react cropper</h1>
        <Cropper />
      </div>
    )
  }
}
