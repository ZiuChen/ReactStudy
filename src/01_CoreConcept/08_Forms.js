const root = ReactDOM.createRoot(document.getElementById('root'))

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    alert(`Name: ${this.state.name} Email: ${this.state.email}`)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        <label>Email</label>
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
// root.render(<Form />)

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    alert(`Title: ${this.state.title} Content: ${this.state.content}`)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        <label>Content</label>
        <textarea name="content" value={this.state.content} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

// root.render(<Article />)

class Choice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: props.list,
      prefer: props.list[0]
    }
  }
  handleChange = (e) => {
    this.setState({
      prefer: e.target.value
    })
  }
  handleSubmit = (e) => {
    alert('What u like is: ' + this.state.prefer)
    e.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          你更喜欢的是:
          <select value={this.state.prefer} onChange={this.handleChange}>
            {this.state.list.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

root.render(<Choice list={['苹果', '西瓜', '橙子', '鸭梨']} />)
