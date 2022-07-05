class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1> //  class component use `this.props` instead function component use `props`
  }
}
const root = ReactDOM.createRoot(document.querySelector('#root'))
const element = <Welcome name="ZiuChen" /> // pass props to component
// root.render(element)

const App = () => (
  <div>
    <Welcome name="ziu" />
    <Welcome name="ZiuChen" />
  </div>
)
// root.render(<App />) // important: use `<App />` instead of `App`

const Avatar = (props) => (
  <img
    className="avatar" // important: use `className` instead of `class`
    src={props.user.imgUrl}
    alt={props.user.name || 'user-avatar'}
    width={props.user.width || '150px'}
  />
)
const UserInfo = (props) => (
  <div className="user-info">
    <Avatar user={{ imgUrl: props.imgUrl, name: props.name }} />
    <span className="name">{props.name}</span>
    <span className="date">{props.date}</span>
  </div>
)
const imgUrl = 'https://fastly.jsdelivr.net/gh/ZiuChen/ZiuChen@main/avatar.jpg'
root.render(<UserInfo name="ZiuChen" date={new Date().toLocaleDateString()} imgUrl={imgUrl} />)
