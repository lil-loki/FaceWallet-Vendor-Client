import GreenTick from '../../assets/tick-mark.png';

import {
  PaymentConfirmContainer,
  GreenTicImg,
  PaidMessage,
  Message
} from './PaymentConfirm.styles';

function PaymentConfirm() {
  return (
    <PaymentConfirmContainer>
      <GreenTicImg src={GreenTick} />
      <PaidMessage>Paid Rs.110</PaidMessage>
      <Message>Thanks for Purchasing at City SuperMarket</Message>
    </PaymentConfirmContainer>
  )
}

export default PaymentConfirm;