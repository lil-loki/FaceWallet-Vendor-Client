/* eslint-disable react-refresh/only-export-components */

import { observer } from 'mobx-react';
import transactionStore from '../../Mobx/TransactionStore';

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


function ConfirmPay() {
  return (
    <CheckOutContainer> 
    <CheckOutHeaderContainer>
    <CheckOutHeaderLogo src={LOGO} />
      <CheckOutHeader>
        {transactionStore.Transaction.shopName}
      </CheckOutHeader>
    </CheckOutHeaderContainer>
    <PriceDetailsContainer>
      <InfoContainer>
        Pay Rs.{transactionStore.Transaction.total} to {transactionStore.Transaction.shopName}
      </InfoContainer>
      <StyledButton onClick={()=>(transactionStore.setTransactionState(3))}>
        Confirm And Pay
      </StyledButton>
    </PriceDetailsContainer>       

  </CheckOutContainer>
  )
}

export default observer(ConfirmPay);