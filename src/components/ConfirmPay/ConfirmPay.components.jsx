/* eslint-disable react/prop-types */
import { 
  CheckOutContainer,
  CheckOutHeaderContainer,
  CheckOutHeaderLogo,
  CheckOutHeader,
  PriceDetailsContainer,
  StyledButton,
  InfoContainer
 } from "./ConfirmPay.styles";

import LOGO from "../../assets/Logo.svg";


function ConfirmPay({Transation}) {
  return (
    <CheckOutContainer> 
    <CheckOutHeaderContainer>
    <CheckOutHeaderLogo src={LOGO} />
      <CheckOutHeader>
        {Transation.shopName}
      </CheckOutHeader>
    </CheckOutHeaderContainer>
    <PriceDetailsContainer>
      <InfoContainer>
        Pay Rs.{Transation.total} to {Transation.shopName}
      </InfoContainer>
      <StyledButton >
        Confirm And Pay
      </StyledButton>
    </PriceDetailsContainer>       

  </CheckOutContainer>
  )
}

export default ConfirmPay;