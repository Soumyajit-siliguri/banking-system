// src/components/BalanceChecking.js
import React, { useState, useEffect } from 'react';
import Bank from '../data/Bank'; // Import Bank class

const BalanceChecking = () => {
  const [accountData, setAccountData] = useState([]);
  const [accountNumber, setAccountNumber] = useState('');
  const [balance, setBalance] = useState(null);
  const [message, setMessage] = useState('');

  // Log account data whenever it changes
  useEffect(() => {
    console.log('Current accounts and balances:', accountData);
  }, [accountData]); // Run whenever accountData changes

  // Fetch account data when component mounts
  useEffect(() => {
    // Fetch account data from Bank class and update state
    const fetchAccountData = async () => {
      try {
        const data = await Bank.fetchAccountData(); // Replace with the actual method to fetch account data
        setAccountData(data);
      } catch (error) {
        console.error('Error fetching account data:', error);
      }
    };

    fetchAccountData(); // Call the async function to fetch account data
  }, []); // Run only on component mount

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const retrievedBalance = await Bank.checkBalance(accountNumber); // Assuming Bank class has a method to check balance
      if (retrievedBalance !== null) {
        setBalance(retrievedBalance); // Set the balance state
        setMessage(`Balance: ${retrievedBalance}`);
      } else {
        setMessage('Account not found');
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      <div className="account-container">
        <h2>Check Balance</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Account Number:</label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </div>
          <button type="submit">Check Balance</button>
        </form>
        {message && <p>{message}</p>}
        {balance && <p>{balance}</p>}
      </div>
    </div>
  );
};

export default BalanceChecking;
