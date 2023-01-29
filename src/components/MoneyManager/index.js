import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  onAddTransaction = event => {
    event.preventDefault()

    const {title, amount, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption

    const newTransaction = {
      id: v4(),
      title1: title,
      amount1: parseInt(amount),
      type1: displayText,
    }

    this.setState(preState => ({
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
      transactionList: [...preState.transactionList, newTransaction],
    }))
  }

  onAmountChange = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  onTitleChange = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onTypeChange = event => {
    this.setState({
      optionId: event.target.value,
    })
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type1 === transactionTypeOptions[1].displayText) {
        console.log(eachTransaction.amount1)
        expensesAmount += parseInt(eachTransaction.amount1)
      }
    })

    return expensesAmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type1 === transactionTypeOptions[0].displayText) {
        incomeAmount += parseInt(eachTransaction.amount1)
      }
    })

    return incomeAmount
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type1 === transactionTypeOptions[0].displayText) {
        incomeAmount += parseInt(eachTransaction.amount1)
      } else {
        expensesAmount += parseInt(eachTransaction.amount1)
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  delete1 = id => {
    const {transactionList} = this.state
    const filterSet = transactionList.filter(each => each.id !== id)

    this.setState({
      transactionList: filterSet,
    })
  }

  render() {
    const {title, amount, optionId, transactionList} = this.state
    console.log(transactionList)
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="app-container">
        <div className="main-container">
          <div className="user-container">
            <h1 className="heading">Hi Richard</h1>
            <p className="greet">
              Welcome back to your <span className="title">Money Manger</span>
            </p>
          </div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
          <div className="transactions-container">
            <div className="transaction-details">
              <h1 className="main-label">Add Transaction</h1>
              <form className="my-form" onSubmit={this.onAddTransaction}>
                <label className="caption" htmlFor="title">
                  TITLE
                </label>
                <input
                  type="text"
                  className="box"
                  placeholder="TITLE"
                  id="title"
                  onChange={this.onTitleChange}
                  value={title}
                />

                <label className="caption" htmlFor="amount">
                  AMOUNT
                </label>
                <br />
                <input
                  type="text"
                  className="box"
                  placeholder="AMOUNT"
                  id="amount"
                  onChange={this.onAmountChange}
                  value={amount}
                />

                <label className="caption" htmlFor="type">
                  Type
                </label>
                <br />
                <select
                  className="type-container"
                  id="type"
                  onChange={this.onTypeChange}
                  value={optionId}
                >
                  <option value={transactionTypeOptions[0].optionId}>
                    {transactionTypeOptions[0].displayText}
                  </option>
                  <option value={transactionTypeOptions[1].optionId}>
                    {transactionTypeOptions[1].displayText}
                  </option>
                </select>

                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
            <div className="transaction-items">
              <h1 className="history">History</h1>

              <div className="record">
                <p className="title2">TITLE</p>
                <p className="cash">AMOUNT</p>
                <p className="mode">TYPE</p>
              </div>
              <ul className="items">
                {transactionList.map(each => (
                  <TransactionItem
                    key={each.id}
                    list={each}
                    delete1={this.delete1}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
