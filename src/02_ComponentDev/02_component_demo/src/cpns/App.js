import React, { Component } from 'react'
import TabControl from './TabControl'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titles: ['新款', '精选', '旅行'],
      currentIndex: 0
    }
  }
  itemClick(index) {
    this.setState({
      currentIndex: index
    })
  }
  render() {
    const { titles, currentIndex } = this.state
    return (
      <div>
        <TabControl itemClick={(index) => this.itemClick(index)} titles={titles} />
        <div className="page-content">
          <h2>{titles[currentIndex]}</h2>
        </div>
      </div>
    )
  }
}
