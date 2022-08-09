import React, { Component } from 'react'

const Btn = (props) => {
  return <button onClick={props.btnClick}>{props.children}</button>
}

export default class PropsFunc extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  decreament() {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  render() {
    return (
      <div>
        <div>counter: {this.state.counter}</div>
        <Btn btnClick={this.increment.bind(this)}>+1</Btn>
        <Btn btnClick={this.decreament.bind(this)}>-1</Btn>
      </div>
    )
  }
}
