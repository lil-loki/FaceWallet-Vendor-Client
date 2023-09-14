import {useRef } from 'react';
import Cart from '../../components/Cart/Cart.components';
import FaceCam from '../../components/FaceCam/FaceCam.components';
import { VideoContainer } from './FaceAuth.styles';

function FaceAuth() {
    const videoRef = useRef(null);

    return (
      <VideoContainer>
        <FaceCam videoRef={videoRef}/>
        <Cart videoRef={videoRef}/>        
      </VideoContainer>
    );
}



export default FaceAuth;