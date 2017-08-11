import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cropper from './react-cropper'

// 引入scss
import './demo.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      example1: {
        img: 'http://ofyaji162.bkt.clouddn.com/nightcat.jpg'
      }
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">react cropper</h1>
        <Cropper img={this.state.example1.img} />
      </div>
    )
  }
}


export default App
