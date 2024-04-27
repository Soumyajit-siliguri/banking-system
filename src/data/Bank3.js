import Node from './Node';
import TreeNode from './TreeNode';

class Bank {
  constructor() {
    this.linkedListHead = null;
    this.binarySearchTreeRoot = null;
    this.accountData = [];
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

  transfer(senderAccountNumber, receiverAccountNumber, amount) {
    const sender = this._findAccount(senderAccountNumber, this.linkedListHead);
    const receiver = this._findAccount(receiverAccountNumber, this.linkedListHead);

    // Validate sender and receiver accounts
    if (!sender || !receiver) {
      throw new Error('Sender or receiver account does not exist');
    }

    // Check sender balance
    if (sender.data.balance < amount) {
      throw new Error('Insufficient balance');
    }

    // Perform transfer
    sender.data.balance -= amount;
    //receiver.data.balance += amount;
    receiver.data.balance += parseFloat(amount); // Ensure amount is parsed as a float


    // Log transfer details
    console.log("Transferring money...");
    console.log("Sender balance after transfer:", sender.data.balance);
    console.log("Receiver balance after transfer:", receiver.data.balance);
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
