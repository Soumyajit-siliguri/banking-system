// src/App.js
import React, { useState } from 'react';
import Bank from './data/Bank'; // Importing the Bank class
import './style.css'; // Importing the external CSS file

function App() {
  const [createAccountNumber, setCreateAccountNumber] = useState('');
  const [createBalance, setCreateBalance] = useState('');
  const [checkAccountNumber, setCheckAccountNumber] = useState('');
  const [senderAccountNumber, setSenderAccountNumber] = useState('');
  const [receiverAccountNumber, setReceiverAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [createAccountMessage, setCreateAccountMessage] = useState('');
  const [checkBalanceMessage, setCheckBalanceMessage] = useState('');
  const [transferMoneyMessage, setTransferMoneyMessage] = useState('');

  const [bank] = useState(() => new Bank());

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const message = bank.createAccount(parseInt(createAccountNumber), parseFloat(createBalance));
    console.log("Updated accounts array after creating account:", bank.accounts);
    setCreateAccountMessage(message);
    setCreateAccountNumber('');
    setCreateBalance('');
  };
  

  const handleCheckBalance = (e) => {
    e.preventDefault();
    console.log("Check Account Number:", checkAccountNumber); // Log checkAccountNumber
    const message = bank.checkBalance(parseInt(checkAccountNumber));
    //console.log("from App.js", message); // Log message to console
    setCheckBalanceMessage(message);
};


  const handleTransferMoney = (e) => {
    e.preventDefault();
    const message = bank.transferMoney(parseInt(senderAccountNumber), parseInt(receiverAccountNumber), parseFloat(amount));
    console.log(message); // Log message to console
    setTransferMoneyMessage(message);
    setSenderAccountNumber('');
    setReceiverAccountNumber('');
    setAmount('');
    console.log("Current list of accounts and balances from App.js :", bank.accounts.map(account => account.data));
  };

  return (
    <div className="app-container">
      <h1>Express Banking System </h1>
      <h3>by Soumyajit Sinha</h3>

      <div className="create-account-form">
        <form onSubmit={handleCreateAccount}>
          <label>
            Account Number:
            <input type="text" value={createAccountNumber} onChange={(e) => setCreateAccountNumber(e.target.value)} />
          </label>
          <label>
            Balance:
            <input type="text" value={createBalance} onChange={(e) => setCreateBalance(e.target.value)} />
          </label>
          <button type="submit">Create Account</button>
          <div className="message-box">{createAccountMessage}</div>
        </form>
      </div>

      <div className="check-balance-form">
        <form onSubmit={handleCheckBalance}>
          <label>
            Account Number:
            <input type="text" value={checkAccountNumber} onChange={(e) => setCheckAccountNumber(e.target.value)} />
          </label>
          <button type="submit">Check Balance</button>
          <div className="message-box">{checkBalanceMessage}</div>
        </form>
      </div>

      <div className="transfer-money-form">
        <form onSubmit={handleTransferMoney}>
          <label>
            Sender's Account Number:
            <input type="text" value={senderAccountNumber} onChange={(e) => setSenderAccountNumber(e.target.value)} />
          </label>
          <label>
            Receiver's Account Number:
            <input type="text" value={receiverAccountNumber} onChange={(e) => setReceiverAccountNumber(e.target.value)} />
          </label>
          <label>
            Amount:
            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </label>
          <button type="submit">Transfer Money</button>
          <div className="message-box">{transferMoneyMessage}</div>
        </form>
      </div>
    </div>
  );
}

export default App;
