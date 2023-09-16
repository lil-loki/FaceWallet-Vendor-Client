/* eslint-disable react/prop-types */
import { ConfirmationContainer } from "./Confirmation.styles";
import  CardDetails from "../../components/CardDetails/CardDetails.components";
import  ConfirmPay from "../../components/ConfirmPay/ConfirmPay.components";

function Confirmation({Transaction,setTransactionState}) {
  return (
    <ConfirmationContainer>
        <CardDetails />
        <ConfirmPay Transaction={Transaction} setTransactionState={setTransactionState}/>
    </ConfirmationContainer>
  )
}

export default Confirmation;