import React, { Component } from 'react'

class ChildCpn extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const { name, age, height } = this.props
    return (
      <div>
        <div>name: {name}</div>
        <div>age: {age}</div>
        <div>height: {height}</div>
      </div>
    )
  }
}

// const ChildCpn = (props) {
//   const { name, age, height } = props
//   return (
//     <div>
//       <div>name: {name}</div>
//       <div>age: {age}</div>
//       <div>height: {height}</div>
//     </div>
//   )
// }

export default class Props extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="Ziu" age="18" height="1.88" />
        <ChildCpn name="ZiuChen" age="19" height="1.99" />
      </div>
    )
  }
}
