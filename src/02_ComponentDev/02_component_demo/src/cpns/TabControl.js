import React, { Component } from 'react'

export default class TabControl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }
  itemClick = (index) => {
    this.setState({
      currentIndex: index
    })
    const { itemClick } = this.props
    itemClick(index)
  }
  render() {
    const { titles } = this.props
    const { currentIndex } = this.state
    return (
      <div className="tab-control">
        {titles.map((item, index) => (
          <div
            key={index}
            className={'tab-item ' + (currentIndex === index ? 'active' : '')}
            onClick={(e) => this.itemClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
    )
  }
}
