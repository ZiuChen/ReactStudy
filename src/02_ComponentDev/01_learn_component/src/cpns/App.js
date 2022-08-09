import React, { Component } from 'react'

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       message: 'Hello, Ziu!'
//     }
//   }
//   render() {
//     return (
//       <div>
//         <span>Here is Class Component.</span>
//         <div>{this.state.message}</div>
//         <div>with state</div>
//       </div>
//     )
//   }
// }

const App = () => (
  <div>
    <span>Here is function Component.</span>
    <div>without state</div>
  </div>
)

export default App
