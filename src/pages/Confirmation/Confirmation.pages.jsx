/* eslint-disable react/prop-types */
import { ConfirmationContainer } from "./Confirmation.styles";
import  CardDetails from "../../components/CardDetails/CardDetails.components";
import  ConfirmPay from "../../components/ConfirmPay/ConfirmPay.components";

function Confirmation({Transation}) {
  return (
    <ConfirmationContainer>
        <CardDetails />
        <ConfirmPay Transation={Transation}/>
    </ConfirmationContainer>
  )
}

export default Confirmation;