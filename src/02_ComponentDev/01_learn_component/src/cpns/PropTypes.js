import React, { Component } from 'react'
import Types from 'prop-types'

const ChildCpn = (props) => {
  const { name, age, height, likes } = props
  return (
    <div>
      <div>name: {name}</div>
      <div>age: {age}</div>
      <div>height: {height}</div>
      <div>
        likes:
        {likes.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </div>
    </div>
  )
}

/* for function component */
ChildCpn.propTypes = {
  name: Types.string.isRequired,
  age: Types.number,
  height: Types.number,
  likes: Types.array
}

ChildCpn.defaultProps = {
  name: 'user',
  age: 18,
  height: 1.8,
  likes: []
}

/* in class component */
class ClassChildCpn extends Component {
  static propTypes = {
    /* ... */
  }
  static defaultProps = {
    /* ... */
  }
  render() {
    return <div>ClassChildCpn</div>
  }
}

export default class PropTypes extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="Ziu" age={18} height={1.88} likes={['HAHA', 'WUWU']} />
      </div>
    )
  }
}
