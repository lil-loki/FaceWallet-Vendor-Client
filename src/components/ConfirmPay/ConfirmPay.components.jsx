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


function ConfirmPay({Transaction,setTransactionState}) {
  return (
    <CheckOutContainer> 
    <CheckOutHeaderContainer>
    <CheckOutHeaderLogo src={LOGO} />
      <CheckOutHeader>
        {Transaction.shopName}
      </CheckOutHeader>
    </CheckOutHeaderContainer>
    <PriceDetailsContainer>
      <InfoContainer>
        Pay Rs.{Transaction.total} to {Transaction.shopName}
      </InfoContainer>
      <StyledButton onClick={()=>(setTransactionState(3))}>
        Confirm And Pay
      </StyledButton>
    </PriceDetailsContainer>       

  </CheckOutContainer>
  )
}

export default ConfirmPay;