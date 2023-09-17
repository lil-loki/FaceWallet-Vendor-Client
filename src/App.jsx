/* eslint-disable react-refresh/only-export-components */
import './App.css'
import {useEffect} from 'react';

import { observer } from 'mobx-react';
import transactionStore from './Mobx/TransactionStore';

import FaceAuth from './pages/FaceAuth/FaceAuth.pages'
import Confirmation from './pages/Confirmation/Confirmation.pages'
import PaymentConfirm from './pages/PaymentConfirm/PaymentConfirm.pages'


function  App() {

  // const [TransactionState, setTransactionState] = useState(1);
  useEffect(() => {
    transactionStore.setTransaction({
      'shopName':"City's SuperMarket",
      'transactionId':"123123",
      'price':100,
      'tax':20,
      'total':120,
    })
    transactionStore.setTransactionState(1);
  }, []);

  return (
    <div className='MainContainer'>
      {transactionStore.TransactionState===1 && <FaceAuth />}
      {transactionStore.TransactionState===2 && <Confirmation />}
      {transactionStore.TransactionState===3 && <PaymentConfirm/>}       
    </div>
  )
}

export default observer(App);
