/* eslint-disable react-refresh/only-export-components */

import {useEffect} from 'react';

import { observer } from 'mobx-react';
import userStore from '../../Mobx/UserStore';


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

  useEffect(() => {
    userStore.setUser({
      'UserID':123123,
      'UserName':"Lokesh S",
      'ProfileImg':"https://tinyurl.com/yt2mcuvj",
      'CardNumber':"**** **** **** 1234",
      'CardholderName':"Lokesh Sivakumar",
      'Expiration':"09/28",
    })
  }, []);

  return (
    <CardDetailsMainContainer>
      <ProfilePhotoContainer>
        <ProfilePhoto src={userStore.user.ProfileImg}/>
        <UserNameContainer>
          {userStore.user.UserName}
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
                <CardNumberValue>{userStore.user.CardNumber}</CardNumberValue>
              </CardNumberContainer>
              <CardDetailsContainer>
                <CardHolderNameContainer>
                  <CardHolderNameLabel>Cardholder Name</CardHolderNameLabel>
                  <CardHolderNameValue>{userStore.user.CardholderName}</CardHolderNameValue>
                </CardHolderNameContainer>
                <CardExpiryContainer>
                  <CardExpiryLabel>Expiration</CardExpiryLabel>
                  <CardExpiryValueContainer>
                    <CardExpiryValueLabelContainer>
                      <CardExpiryValueLabel>Valid</CardExpiryValueLabel>
                      <CardExpiryValueLabel>Thru</CardExpiryValueLabel>
                    </CardExpiryValueLabelContainer>
                    <CardExpiryValue>{userStore.user.Expiration}</CardExpiryValue>
                  </CardExpiryValueContainer>
                </CardExpiryContainer>
              </CardDetailsContainer>
            </CardBottomContainer>
          </Card>
        </CardContainer>
    </CardDetailsMainContainer>
  )
}

export default observer(CardDetails);