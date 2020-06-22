import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card border-primary mb-2">
          <div className="card-header text-center">Your Balance</div>
          <div className="card-body text-primary">
            <h1 className="card-title text-center">${total}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
