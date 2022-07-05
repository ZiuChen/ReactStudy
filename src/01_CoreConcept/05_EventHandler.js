class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    // this.handleBtnClick = this.handleBtnClick.bind(this)
  }
  // handleBtnClick() {
  //   // `this.setState` is undefined cause it is a class method.
  //   // we have to bind `this` to the function in the constructor.
  //   this.setState(() => (this.state.counter += 1))
  // }
  handleBtnClick = () => {
    // in order to avoid binding `this`
    // define function use arrow function (experimental)
    this.setState(() => (this.state.counter += 1))
  }
  showMsg = (msg, event) => {
    // pass arguments to the function
    // 1. use .bind(arguments)
    // 2. use () => { return arguments }
    alert(msg)
    console.log(event)
  }
  render() {
    return (
      <div>
        <div className="counter">
          <h2>Counter</h2>
          <p>Num: {this.state.counter}</p>
          <button onClick={this.handleBtnClick}>+1</button>
          {/* avoiding use this method, which will cause performance problem. */}
          {/* <button onClick={() => this.handleBtnClick()}>+1</button> */}
        </div>
        <div className="table">
          {/* This will cause unexpected calling of function. */}
          {/* <button onClick={this.showMsg('Hi, you clicked me.')}>
            Show Message
          </button> */}
          {/* methods below is correct */}
          <button onClick={(e) => this.showMsg('Hey, you clicked me.', e)}>Show Message</button>
          <button onClick={this.showMsg.bind(this, 'Hey, you clicked me.')}>Show Message</button>
        </div>
      </div>
    )
  }
}

const element = <Component />
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(element)
