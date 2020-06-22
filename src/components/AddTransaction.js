import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
          </div>
          <div className="form-group">
            <label htmlFor="amount">
              Amount (
                <span className="text-danger">negative : expense</span>, 
                <span className="text-success"> positive : income</span>)</label>
            <input type="number"  className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          </div>
          <button className="btn btn-primary btn-block">Add transaction</button>
        </form>
      </div>
    </div>
  )
}
