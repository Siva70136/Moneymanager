// Write your code here
// Write your code here
import './index.css'

const TransactionItem = props => {
  const {list, delete1} = props
  const {title1, type1, amount1, id} = list

  const onDelete = () => {
    delete1(id)
  }

  return (
    <li className="transaction-item">
      <p className="title1">{title1}</p>
      <p className="amount">{amount1}</p>

      <div className="income">
        <span className="type">{type1}</span>
        <button
          type="button"
          data-testid="delete"
          onClick={onDelete}
          className="delete-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
