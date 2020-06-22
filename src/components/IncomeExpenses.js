import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="card border-primary mb-2">
          <div className="card-header text-center">Your Income</div>
          <div className="card-body text-primary">
            <h1 className="card-title text-center">${income}</h1>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card border-primary mb-2">
          <div className="card-header text-center">Your Expense</div>
          <div className="card-body text-primary">
            <h1 className="card-title text-center">${expense}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
