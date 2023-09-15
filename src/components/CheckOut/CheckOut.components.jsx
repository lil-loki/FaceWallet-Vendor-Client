/* eslint-disable react/prop-types */
import { 
  CheckOutContainer,
  CheckOutHeaderContainer,
  CheckOutHeaderLogo,
  CheckOutHeader,
  PriceDetailsContainer,
  PriceDetails,
  PriceLable,
  PriceValue,
  TotalDetails,
  TotalLable,
  TotalValue
 } from "./CheckOut.styles";

 import LOGO from "../../assets/Logo.svg"


function CheckOut({videoRef}) {

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
    <CheckOutContainer> 
      <CheckOutHeaderContainer>
        <CheckOutHeader>
          <CheckOutHeaderLogo src={LOGO} />
          City SuperMarket
        </CheckOutHeader>
      </CheckOutHeaderContainer>
      <PriceDetailsContainer>
        <PriceDetails>
          <PriceLable>Price</PriceLable>
          <PriceValue>Rs.500</PriceValue>
        </PriceDetails>
        <PriceDetails>
          <PriceLable>Tax</PriceLable>
          <PriceValue>Rs.50</PriceValue>
        </PriceDetails>
        <TotalDetails>
          <TotalLable>Total Amount</TotalLable>
          <TotalValue>Rs.550</TotalValue>
        </TotalDetails>
      </PriceDetailsContainer>
       <button onClick={handleCaptureImage}>Capture Image</button>
      <div>
        Position Your Face Within The Frame
      </div>
    </CheckOutContainer>
  )
}



export default CheckOut;