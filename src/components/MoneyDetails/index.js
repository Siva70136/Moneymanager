// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="display-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="side-img"
        />
        <div className="data-container">
          <p className="name">your balance</p>
          <p className="money" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="side-img"
        />
        <div className="data-container">
          <p className="name">your Income</p>
          <p className="money" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expanses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="side-img"
        />
        <div className="data-container">
          <p className="name">Your Expenses</p>
          <p className="money" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
