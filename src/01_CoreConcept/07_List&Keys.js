const root = ReactDOM.createRoot(document.querySelector('#root'))

const numbers = [1, 2, 3, 4, 5, 6]
const TableList = (props) => {
  const nums = props.numbers
  // the key help React to identify the element
  // help React to update the element efficiently
  // do not use index as key
  return nums.map((item) => <li key={item.toString()}>{item}</li>)
}
// root.render(<TableList numbers={numbers} />)

const ListItem = (props) => <li>{props.content}</li>
const Lists = (props) => {
  const items = props.items
  // bind the key to the item, but not to the <li />
  // tips: where the map function is used, where the key is used
  return items.map((item) => <ListItem key={item.toString()} content={item} />)
}
root.render(<Lists items={numbers} />)
