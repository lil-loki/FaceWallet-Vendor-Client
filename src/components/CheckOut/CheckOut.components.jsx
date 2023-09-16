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
  TotalValue,
  StyledButton,
  InfoContainer
 } from "./CheckOut.styles";

 import LOGO from "../../assets/Logo.svg"


function CheckOut({videoRef,Transaction,setTransactionState}) {

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
      setTransactionState(2);
    }
  };


  return (
    <CheckOutContainer> 
      <CheckOutHeaderContainer>
      <CheckOutHeaderLogo src={LOGO} />
        <CheckOutHeader>
          {Transaction.shopName}
        </CheckOutHeader>
      </CheckOutHeaderContainer>
      <PriceDetailsContainer>
        <PriceDetails>
          <PriceLable>Price</PriceLable>
          <PriceValue>Rs.{Transaction.price}</PriceValue>
        </PriceDetails>
        <PriceDetails>
          <PriceLable>Tax</PriceLable>
          <PriceValue>Rs.{Transaction.tax}</PriceValue>
        </PriceDetails>
        <TotalDetails>
          <TotalLable>Total Amount</TotalLable>
          <TotalValue>Rs.{Transaction.total}</TotalValue>
        </TotalDetails>
        <StyledButton onClick={handleCaptureImage}>
          Press To Procceed
        </StyledButton>
      </PriceDetailsContainer>       
      <InfoContainer>
        Position Your Face Within The Frame
      </InfoContainer>
    </CheckOutContainer>
  )
}



export default CheckOut;