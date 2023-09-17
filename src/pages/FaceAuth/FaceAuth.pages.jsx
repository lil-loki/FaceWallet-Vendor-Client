/* eslint-disable react/prop-types */
import {useRef} from 'react';
import CheckOut from '../../components/CheckOut/CheckOut.components';
import FaceCam from '../../components/FaceCam/FaceCam.components';
import { FaceAuthContainer } from './FaceAuth.styles';



function FaceAuth() {
    const videoRef = useRef(null);

    return (
      <FaceAuthContainer>
        <FaceCam 
          videoRef={videoRef} 
        />
        <CheckOut 
          videoRef={videoRef} 
        />        
      </FaceAuthContainer>
    );
}



export default FaceAuth;