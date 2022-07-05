class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    console.log('Mounted')
    setInterval(() => {
      // 1. do not modify state directly, use setState instead.
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    console.log('unMounted')
  }
  render() {
    return (
      <div>
        <h2>Hello, Clock!</h2>
        <p>It is {this.state.date.toLocaleTimeString()} now!</p>
      </div>
    )
  }
}

const element = <Clock />
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(element)
