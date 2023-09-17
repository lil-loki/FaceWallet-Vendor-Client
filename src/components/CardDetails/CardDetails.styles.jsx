import styled from 'styled-components';


export const CardDetailsMainContainer = styled.div`
    width:50%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Kalam', cursive;
`;

export const ProfilePhotoContainer = styled.div`
    width:80%;
    height:40%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`;
export const ProfilePhoto = styled.img`
    width: 20%;
    height: 40%;
    border-radius: 50%;
    margin: 0;
    margin-top: 10%;
    border: 2px solid black;
`;

export const UserNameContainer = styled.div`
    height:20%;
    font-family: 'Kalam', cursive;
    font-weight: 700;
    font-size: 300%;
    margin-top: 5%;
    display:flex;
    align-items: flex-end;
`;

export const CardContainer = styled.div`
    width: 55%;
    height: 30%;
    margin-top: 5%;
`;

export const Card = styled.div`
    width: 100%;
    height: 100%;
    /* background: linear-gradient(to right, #1e3c72, #2a5298); */
    background: linear-gradient(to right, black, gray);
    color: white;
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: 'Source Code Pro', monospace;
    font-weight: 400;
`;

export const CardTopContainer = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: space-between;
`;

export const ChipImg = styled.img`
    padding-left: 5%;
    padding-top: 1%;
    height: 100%;
`;

export const BrandImg = styled.img`
    padding-right: 5%;
    padding-top: 1%;
    height: 100%;
`;


export const CardBottomContainer = styled.div`
    width: 100%;
    height: 75%;
    font-size:1rem;
`;

export const CardNumberContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CardNumberLabel = styled.div`
    width: 80%;
    height: 50%;
    font-weight: 200;
    font-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const CardNumberValue = styled.div`
    width: 80%;
    height: 50%;
    font-weight: 1000;
    font-size: 175%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const CardDetailsContainer = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    margin : auto;
`;

export const CardHolderNameContainer = styled.div`
    width: 70%;
    height: 100%;
`;

export const CardHolderNameLabel = styled.div`
    width: 100%;
    height: 50%;
    font-size: 75%;
    display: flex;
    align-items: flex-end;
`;

export const CardHolderNameValue = styled.div`
    width: 100%;
    height: 50%;
    font-size: 125%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
`;

export const CardExpiryContainer = styled.div`
    width: 30%;
    height: 100%;
`;

export const CardExpiryLabel = styled.div`
    width: 100%;
    height: 50%;
    font-size: 75%;
    display: flex;
    align-items: flex-end;
    
`;

export const CardExpiryValueContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex; 
`;

export const CardExpiryValueLabelContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    font-size: 75%;
    :first-child {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
`;

export const CardExpiryValueLabel = styled.div`
    height: 50%;
`;

export const CardExpiryValue = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 125%;
`;