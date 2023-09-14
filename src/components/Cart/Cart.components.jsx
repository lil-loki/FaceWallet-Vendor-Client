/* eslint-disable react/prop-types */
import { CartContainer } from "./Cart.styles";

function Cart({videoRef}) {

  const handleCaptureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert the captured frame to a data URL (PNG format)
      const imageDataURL = canvas.toDataURL('image/png');

      // Create a download link for the image
      const a = document.createElement('a');
      a.href = imageDataURL;
      a.download = 'webcam_capture.png';
      a.click();
    }
  };

  return (
    <CartContainer> 
       <button onClick={handleCaptureImage}>Capture Image</button>
    </CartContainer>
  )
}



export default Cart;