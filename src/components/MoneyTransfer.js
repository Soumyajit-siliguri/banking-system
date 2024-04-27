// src/components/MoneyTransfer.js
import React, { useState } from 'react';
import Bank from '../data/Bank'; // Import Bank class

const MoneyTransfer = () => {
  const [senderAccount, setSenderAccount] = useState('');
  const [receiverAccount, setReceiverAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      Bank.transfer(senderAccount, receiverAccount, amount);
      //console.log("Updated balance after transfer:", updatedBalance); // Add this line
      setMessage('Transfer successful');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      <div className="account-container">
      <h2>Money Transfer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Sender Account Number:</label>
          <input
            type="text"
            value={senderAccount}
            onChange={(e) => setSenderAccount(e.target.value)}
          />
        </div>
        <div>
          <label>Receiver Account Number:</label>
          <input
            type="text"
            value={receiverAccount}
            onChange={(e) => setReceiverAccount(e.target.value)}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">Transfer Money</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
};

export default MoneyTransfer;
