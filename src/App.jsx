import './App.css'
import {useState,useEffect} from 'react';
import FaceAuth from './pages/FaceAuth/FaceAuth.pages'
import Confirmation from './pages/Confirmation/Confirmation.pages'


function App() {

  const [Transation, setTranscation] = useState({});
  const [TransationState, setTransationState] = useState(true);
  useEffect(() => {
    setTranscation({
      'shopName':"City SuperMarket",
      'transactionId':"123123",
      'price':100,
      'tax':10,
      'total':110,
    })
  }, []);

  return (
    <div className='MainContainer'>
      {
        TransationState ? <FaceAuth Transation={Transation} setTransationState={setTransationState}/>
          :<Confirmation Transation={Transation} setTransationState={setTransationState} />
      }
      
       
    </div>
  )
}

export default App
