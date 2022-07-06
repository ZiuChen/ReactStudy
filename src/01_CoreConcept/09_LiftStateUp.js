const root = ReactDOM.createRoot(document.querySelector('#root'))

const RateMap = {
  r2d: 0.15,
  d2r: 6.72
}

class MoneyInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: props.type
    }
  }
  handleChange = (e) => {
    this.props.handleChange({
      type: this.state.type,
      money: e.target.value
    })
  }
  render() {
    const money = this.props.money
    return (
      <div>
        <span>{this.state.type}</span>
        <input type="number" value={money} onChange={this.handleChange} />
      </div>
    )
  }
}

class Caculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rmb: 0,
      dollar: 0
    }
  }
  handleChange = (arg) => {
    switch (arg.type) {
      case 'rmb':
        this.setState({
          rmb: parseFloat(arg.money),
          dollar: parseFloat(arg.money) * RateMap['r2d']
        })
        break
      case 'dollar':
        this.setState({
          rmb: parseFloat(arg.money) * RateMap['d2r'],
          dollar: parseFloat(arg.money)
        })
        break
    }
  }
  render() {
    return (
      <div>
        <MoneyInput type="rmb" money={this.state.rmb} handleChange={this.handleChange} />
        <MoneyInput type="dollar" money={this.state.dollar} handleChange={this.handleChange} />
      </div>
    )
  }
}

root.render(<Caculator />)
