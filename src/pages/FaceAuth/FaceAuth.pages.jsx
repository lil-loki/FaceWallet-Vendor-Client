/* eslint-disable react/prop-types */
import {useRef} from 'react';
import CheckOut from '../../components/CheckOut/CheckOut.components';
import FaceCam from '../../components/FaceCam/FaceCam.components';
import { FaceAuthContainer } from './FaceAuth.styles';



function FaceAuth({Transaction,setTransactionState}) {
    const videoRef = useRef(null);

    return (
      <FaceAuthContainer>
        <FaceCam 
          videoRef={videoRef} 
        />
        <CheckOut 
          videoRef={videoRef} 
          Transaction={Transaction}
          setTransactionState={setTransactionState}
        />        
      </FaceAuthContainer>
    );
}



export default FaceAuth;