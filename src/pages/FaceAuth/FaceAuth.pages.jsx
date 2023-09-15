import {useRef } from 'react';
import CheckOut from '../../components/CheckOut/CheckOut.components';
import FaceCam from '../../components/FaceCam/FaceCam.components';
import { VideoContainer } from './FaceAuth.styles';



function FaceAuth() {
    const videoRef = useRef(null);

    return (
      <VideoContainer>
        <FaceCam videoRef={videoRef}/>
        <CheckOut videoRef={videoRef}/>        
      </VideoContainer>
    );
}



export default FaceAuth;