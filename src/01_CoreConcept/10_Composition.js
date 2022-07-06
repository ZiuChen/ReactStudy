const root = ReactDOM.createRoot(document.querySelector('#root'))

// use `props.children` to pass any child component to <Table />
const Table = (props) => <div className="table">{props.children}</div>

const Card = (props) => (
  // different to `slot`, you can pass anything via `props`
  <div className="card">
    <div className="header">{props.header || 'Title.'}</div>
    <div className="content">{props.content || 'Content.'}</div>
    <div className="footer">{props.footer || 'Footer.'}</div>
  </div>
)

const ListTable = (
  <Table>
    <li>1.</li>
    <li>2.</li>
    <li>3.</li>
  </Table>
)
const UserInfoCard = <Card header={<div>UserInfo</div>} footer={<span>...</span>}></Card>

root.render(UserInfoCard)
root.render(ListTable)
