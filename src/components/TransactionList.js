import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="row">
      <div className="col-md-12">
      <h3>History</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Transaction Title</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))} */}
            {transactions.map(transaction =>(
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
          </tbody>
        </table>
      </div>
     
    </div>
  )
}
