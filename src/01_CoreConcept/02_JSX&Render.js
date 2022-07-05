const root = ReactDOM.createRoot(document.querySelector('#root'))
let msg = 'Hello, React!'
const handleBtnClick = (e) => {
  msg = 'You like it.'
  render(root) // rerender manually
}
const render = (r) => {
  const element = (
    <div>
      <h1>{msg}</h1>
      <button onClick={handleBtnClick}>Like</button>
    </div>
  )
  r.render(element)
}
render(root)
