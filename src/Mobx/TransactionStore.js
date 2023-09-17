import { action, makeObservable, observable } from "mobx";

class TransactionStore{

    constructor(){
        makeObservable(this,{
            Transaction:observable,
            setTransaction:action,
            TransactionState:observable,
            setTransactionState:action
        });
    }

    Transaction={};
    TransactionState=1;

    setTransaction=(data)=>{this.Transaction=data};
    setTransactionState=(data)=>{this.TransactionState=data};


}

const transactionStore = new TransactionStore();

export default transactionStore;