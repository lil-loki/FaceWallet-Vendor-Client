import './App.css'
import {useState,useEffect} from 'react';
import FaceAuth from './pages/FaceAuth/FaceAuth.pages'
import Confirmation from './pages/Confirmation/Confirmation.pages'
import PaymentConfirm from './pages/PaymentConfirm/PaymentConfirm.pages'


function App() {

  const [Transaction, setTransaction] = useState({});
  const [TransactionState, setTransactionState] = useState(1);
  useEffect(() => {
    setTransaction({
      'shopName':"City SuperMarket",
      'transactionId':"123123",
      'price':100,
      'tax':10,
      'total':110,
    })
  }, []);

  return (
    <div className='MainContainer'>
      {TransactionState===1 && <FaceAuth Transaction={Transaction} setTransactionState={setTransactionState}/>}
      {TransactionState===2 && <Confirmation Transaction={Transaction} setTransactionState={setTransactionState}/>}
      {TransactionState===3 && <PaymentConfirm/>}

      {/* {
        TransationState ? <FaceAuth Transation={Transation} setTransationState={setTransationState}/>
          :<Confirmation Transation={Transation} setTransationState={setTransationState} />
      } */}
      {/* <PaymentConfirm /> */}
      
       
    </div>
  )
}

export default App
