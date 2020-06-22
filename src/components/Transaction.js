import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
      <tr>
      <td><span className="badge badge-primary">{sign}</span> ${Math.abs(transaction.amount)}</td>
      <td>{transaction.text}</td>
      <td><button onClick={() => deleteTransaction(transaction.id)} className="btn btn-danger">Delete</button></td>
    </tr>
  )
}
