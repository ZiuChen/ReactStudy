const DarkIcon = () => <div>DarkIcon</div>
const LightIcon = () => <div>LightIcon</div>

class DarkModeBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDarkMode: false
    }
  }
  toggleDarkMode = () => {
    this.setState({
      isDarkMode: !this.state.isDarkMode
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleDarkMode}>
          {this.state.isDarkMode ? <DarkIcon /> : <LightIcon />}
        </button>
      </div>
    )
  }
}

const WarningBanner = (props) => {
  if (!props.warn) {
    return null
  }
  return <div className="warning">Warning!</div>
}
class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showWarning: true }
  }
  handleToggleClick = () => {
    this.setState((state) => ({
      showWarning: !state.showWarning
    }))
  }
  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>{this.state.showWarning ? 'Hide' : 'Show'}</button>
      </div>
    )
  }
}

const Page = () => (
  <div>
    <DarkModeBtn />
    <Banner />
  </div>
)

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<Page />)
