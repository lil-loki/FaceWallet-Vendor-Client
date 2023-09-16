import { 
  CardDetailsMainContainer,
  ProfilePhotoContainer,
  ProfilePhoto,
  UserNameContainer,
  CardContainer,
  Card,
  CardTopContainer,
  ChipImg,
  BrandImg,
  CardBottomContainer,
  CardNumberContainer,
  CardNumberLabel,
  CardNumberValue,
  CardDetailsContainer,
  CardHolderNameContainer,
  CardHolderNameLabel,
  CardHolderNameValue,
  CardExpiryContainer,
  CardExpiryLabel,
  CardExpiryValueContainer,
  CardExpiryValueLabelContainer,
  CardExpiryValueLabel,
  CardExpiryValue
 } from "./CardDetails.styles";

import Chip from '../../assets/chip.png'
import Visa from  '../../assets/visa.png'

function CardDetails() {
  let imgsrc="https://tinyurl.com/yt2mcuvj";
  return (
    <CardDetailsMainContainer>
      <ProfilePhotoContainer>
        <ProfilePhoto src={imgsrc}/>
        <UserNameContainer>
          Lokesh S
        </UserNameContainer>
      </ProfilePhotoContainer>    
        <CardContainer>
          <Card>
            <CardTopContainer>
              <ChipImg src={Chip}/>
              <BrandImg src={Visa} />
            </CardTopContainer>
            <CardBottomContainer>
              <CardNumberContainer>
                <CardNumberLabel>Card Number</CardNumberLabel>
                <CardNumberValue>**** **** **** 5555</CardNumberValue>
              </CardNumberContainer>
              <CardDetailsContainer>
                <CardHolderNameContainer>
                  <CardHolderNameLabel>Cardholder Name</CardHolderNameLabel>
                  <CardHolderNameValue>Lokesh Sivakumar</CardHolderNameValue>
                </CardHolderNameContainer>
                <CardExpiryContainer>
                  <CardExpiryLabel>Expiration</CardExpiryLabel>
                  <CardExpiryValueContainer>
                    <CardExpiryValueLabelContainer>
                      <CardExpiryValueLabel>Valid</CardExpiryValueLabel>
                      <CardExpiryValueLabel>Thru</CardExpiryValueLabel>
                    </CardExpiryValueLabelContainer>
                    <CardExpiryValue>01/25</CardExpiryValue>
                  </CardExpiryValueContainer>
                </CardExpiryContainer>
              </CardDetailsContainer>
            </CardBottomContainer>
          </Card>
        </CardContainer>
    </CardDetailsMainContainer>
  )
}

export default CardDetails;