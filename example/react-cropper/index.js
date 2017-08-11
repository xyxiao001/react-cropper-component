import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

class ReactCropper extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  //reload 重新布局
  reload () {
    // 得到外层容器的宽度高度
		let w =  ~~(window.getComputedStyle(this.refs.cropper).width.replace('px', ''))
		let h =  ~~(window.getComputedStyle(this.refs.cropper).height.replace('px', ''))
    let scale = 1
		// 存入图片真实高度
		let trueWidth = this.refs.cropperImg.width
		let trueHeight = this.refs.cropperImg.height
		if (trueWidth > w) {
			// 如果图片宽度大于容器宽度
			scale = w / trueWidth
		}
		if (trueHeight * scale > h) {
			scale = h / trueHeight
		}
    scale = scale.toFixed(3)
		let x = -(trueWidth - trueWidth * scale) / 2 + (w - trueWidth * scale) / 2
		let y = -(trueHeight - trueHeight * scale) / 2 + (h - trueHeight * scale) / 2

    this.setState({
      w: w,
      h: h,
      scale: scale,
      x: x,
      y: y,
      trueWidth: trueWidth,
      trueHeight: trueHeight
    })
  }

  boxStyle () {
    let { trueWidth, trueHeight, scale , x, y} = this.state
    return {
      width: `${trueWidth}px`,
			height: `${trueHeight}px`,
			transform: `scale(${scale}, ${scale}) translate3d(${x / scale}px, ${y / scale}px, 0px)`
    }
  }

  componentDidMount() {
    this.refs.cropperImg.onload = () => this.reload()
  }

  render() {
    return (
      <div className="cropper" ref="cropper">
        <div className="cropper-box">
    			<div className="cropper-box-canvas" style={this.boxStyle()} >
    				<img ref="cropperImg" src={this.props.img} />
    			</div>
		    </div>
      </div>
    )
  }
}

ReactCropper.PropsTypes = {
  img: {
    type: String,
    required: true
  }
}

export default ReactCropper
