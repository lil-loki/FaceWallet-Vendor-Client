/* eslint-disable react/prop-types */
import {useRef} from 'react';
import CheckOut from '../../components/CheckOut/CheckOut.components';
import FaceCam from '../../components/FaceCam/FaceCam.components';
import { FaceAuthContainer } from './FaceAuth.styles';



function FaceAuth({Transation,setTransationState}) {
    const videoRef = useRef(null);

    return (
      <FaceAuthContainer>
        <FaceCam 
          videoRef={videoRef} 
        />
        <CheckOut 
          videoRef={videoRef} 
          Transation={Transation}
          setTransationState={setTransationState}
        />        
      </FaceAuthContainer>
    );
}



export default FaceAuth;