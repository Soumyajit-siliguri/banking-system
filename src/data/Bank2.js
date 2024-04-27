import Node from './Node';
import TreeNode from './TreeNode';

class Bank {
  constructor() {
    this.linkedListHead = null;
    this.binarySearchTreeRoot = null;
  }

  addAccount(accountNumber, balance) {
    const newAccount = { accountNumber, balance };

    // Add to linked list
    const newNode = new Node(newAccount);
    newNode.next = this.linkedListHead;
    this.linkedListHead = newNode;

    // Add to binary search tree
    this.binarySearchTreeRoot = this._insertIntoBST(this.binarySearchTreeRoot, accountNumber, balance);
  }

  _insertIntoBST(node, accountNumber, balance) {
    if (node === null) {
      return new TreeNode(accountNumber, balance);
    }

    if (accountNumber < node.accountNumber) {
      node.left = this._insertIntoBST(node.left, accountNumber, balance);
    } else if (accountNumber > node.accountNumber) {
      node.right = this._insertIntoBST(node.right, accountNumber, balance);
    }

    return node;
  }

  static transfer(senderAccountNumber, receiverAccountNumber, amount) {
    const sender = this._findAccount(senderAccountNumber, this.linkedListHead);
    const receiver = this._findAccount(receiverAccountNumber, this.linkedListHead);

    // Other logic
    console.log("Current balance of 'fromAccount' before transfer:", fromAccount.balance); // Add this line
    console.log("Current balance of 'toAccount' before transfer:", toAccount.balance); // Add this line


    if (!sender || !receiver) {
      throw new Error('Sender or receiver account does not exist');
    }

    if (sender.data.balance < amount) {
      throw new Error('Insufficient balance');
    }

    sender.data.balance -= amount;
    receiver.data.balance += amount;
    // Perform transfer logic
   console.log("Transferring money..."); // Add this line

   // Update balances
  console.log("Current balance of 'fromAccount' after transfer:", fromAccount.balance); // Add this line
  console.log("Current balance of 'toAccount' after transfer:", toAccount.balance); // Add this line

  return updatedBalance;

  }

  _findAccount(accountNumber, node) {
    while (node !== null) {
      if (node.data.accountNumber === accountNumber) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  checkBalance(accountNumber) {
    const account = this._findAccountInBST(this.binarySearchTreeRoot, accountNumber);
    return account ? account.balance : null;
  }

  _findAccountInBST(node, accountNumber) {
    if (node === null || node.accountNumber === accountNumber) {
      return node;
    }

    if (accountNumber < node.accountNumber) {
      return this._findAccountInBST(node.left, accountNumber);
    } else {
      return this._findAccountInBST(node.right, accountNumber);
    }
  }
}

export default new Bank();
