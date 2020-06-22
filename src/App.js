import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <div className="container">
      <GlobalProvider>
      <Header />
      <div className="row">
        <div className="col-md-6">
          <TransactionList />
        </div>
          <div className="col-md-6">
            <div className="">
              <Balance />
              <IncomeExpenses />
              <AddTransaction />
            </div>
          </div>
        {/* <div className="col-md-3"></div> */}
      </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
