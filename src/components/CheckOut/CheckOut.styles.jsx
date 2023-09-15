import styled from 'styled-components';

export const CheckOutContainer = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family: 'Kalam', cursive;
    font-weight: 400;
`;

export const CheckOutHeaderContainer = styled.div`
    width:80%;
    height:40%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    
`;

export const CheckOutHeaderLogo = styled.img`
    width: 20%;
    height: 40%;
    
`;

export const CheckOutHeader = styled.div`
    font-size:4rem;
    font-weight: 700;
`;

export const PriceDetailsContainer = styled.div`
    width:80%;
    height:45%;
    display:flex;
    flex-direction:column;
    justify-content: center;
`;



export const PriceDetails = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:2.5rem;
    margin-bottom: 20px;
    width:100%;
    height:15%;
`;

export const PriceLable = styled.span`
    color:grey;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const PriceValue = styled.span`
    color:grey;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const TotalDetails = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:3.5rem;
    width:100%;
    height:20%;
`;

export const TotalLable = styled.span`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const TotalValue = styled.span`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const StyledButton = styled.button`
    width: 50%;
    height: 15%;
    background-color: black;
    color: white;
    border: none;
    margin: auto;
    font-family: 'Kalam', cursive;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:100%;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const InfoContainer = styled.div`
    width:80%;
    height:5%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:1.5rem;
`;

export const Video = styled.video`
    width:50%;
    height:100%;
    object-fit: cover;
`;