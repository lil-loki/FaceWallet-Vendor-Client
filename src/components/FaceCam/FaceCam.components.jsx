/* eslint-disable react/prop-types */
import { useState, useEffect} from 'react';
import { Video } from './FaceCam.styles';

function FaceCam({videoRef}) {
    
    const [stream, setStream] = useState(null);
  
    useEffect(() => {
      const getMedia = async () => {
        try {
          const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
  
          if (videoRef.current) {
            videoRef.current.srcObject = mediaStream;
            setStream(mediaStream);
          }
        } catch (error) {
          console.error('Error accessing webcam:', error);
        }
      };
  
      getMedia();
  
      // Cleanup function to stop the webcam when the component unmounts
      return () => {
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
      };
    }, []);


  return (
    <>
    <Video ref={videoRef} autoPlay playsInline />
    </>
  )
}

export default FaceCam;