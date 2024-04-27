// src/data/Bank.js
import Node from './Node';

class Bank {
  constructor() {
    this.accounts = []; // Empty list to store bank accounts
  }
/*
   // Function to create a new bank account
   createAccount(accountNumber, balance) {
    const newNode = new Node({ accountNumber, balance });
    console.log("in side createAccount of Bank.js -- account recieved:", accountNumber, "type of data: ", typeof accountNumber, "balance recieved:", balance, typeof balance);
    this.accounts.push(newNode);
    const message = `Account ${accountNumber} created successfully.`;
    console.log("from Bank.js", message); // Log message to console
    //console.log("from Bank.js", "Current list of accounts and balances from bank.js:");
    this.accounts.forEach(account => {
      console.log(`Account Number: ${account.data.accountNumber}, Balance: ${account.data.balance}`);
    });
    return message;
  }
  */ 
  createAccount(accountNumber, balance) {
    const newNode = new Node({ accountNumber, balance });
    console.log("in side createAccount of Bank.js -- account received:", accountNumber, "type of data:", typeof accountNumber, "balance received:", balance, "type of data:", typeof balance);
    console.log("Before pushing, accounts length:", this.accounts.length);
    this.accounts.push(newNode);
    console.log("After pushing, accounts length:", this.accounts.length);
    const message = `Account ${accountNumber} created successfully.`;
    console.log("from Bank.js", message); // Log message to console
    //console.log("from Bank.js", "Current list of accounts and balances from bank.js:");
    console.log("In create account bank.js")
    this.accounts.forEach(account => {
      console.log(`Account Number: ${account.data.accountNumber}, Balance: ${account.data.balance}`);
    });
    return message;
}


  // Function to check the balance of an account
  checkBalance(accountNumber) {
    console.log("In check balance bank.js")
    this.accounts.forEach(account => {
        console.log(`Account Number: ${account.data.accountNumber}, Balance: ${account.data.balance}`);
      });
    const account = this.findAccount(accountNumber);
    if (account) {
      const message = `Account Balance for Account ${accountNumber}: Rs. ${account.data.balance}`;
      console.log(message); // Log message to console
      return message;
    } else {
      const message = `Account ${accountNumber} not found.`;
      console.log(message); // Log message to console
      return message;
    }
  }

  // Function to transfer money between accounts
  transferMoney(senderAccountNumber, receiverAccountNumber, amount) {
    const senderAccount = this.findAccount(senderAccountNumber);
    const receiverAccount = this.findAccount(receiverAccountNumber);

    if (!senderAccount || !receiverAccount) {
      const message = "Sender or Receiver account not found.";
      console.log(message); // Log message to console
      return message;
    }

    if (senderAccount.data.balance < amount) {
      const message = "Insufficient balance.";
      console.log(message); // Log message to console
      return message;
    }

    senderAccount.data.balance -= amount;
    receiverAccount.data.balance += amount;
    const message = `Money transferred successfully from ${senderAccountNumber} to ${receiverAccountNumber}`;
    console.log(message); // Log message to console
    console.log("Current list of accounts and balances from bank.js:");
    this.accounts.forEach(account => {
      console.log(`Account Number: ${account.data.accountNumber}, Balance: ${account.data.balance}`);
    });
    return message;
  }

  // Helper function to find an account in the list
  findAccount(accountNumber) {
    console.log("Searching for Account:", accountNumber); // Log accountNumber being searched for
    console.log("Accounts Array:", this.accounts); // Log accounts array
    return this.accounts.find(account => account.data.accountNumber === accountNumber);
}


}

export default Bank;
