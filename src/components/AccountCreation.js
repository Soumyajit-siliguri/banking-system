// AccountCreation.js

import React, { useState } from 'react';
import Bank from '../data/Bank';
import '../style.css'; // Import common CSS file from the parent directory (src)


const AccountCreation = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [balance, setBalance] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log("Account number recieved:", accountNumber);
      console.log("Balance recieved:", balance);
      Bank.addAccount(accountNumber, parseFloat(balance));
      console.log("list of accounts and balance", AccountCreation);
      setMessage('Account created successfully');
      setAccountNumber('');
      setBalance('');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      <div className="account-container">
        <h2>Create New Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Account Number:</label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </div>
          <div>
            <label>Initial Balance:</label>
            <input
              type="text"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
            />
          </div>
          <button type="submit">Create Account</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default AccountCreation;
