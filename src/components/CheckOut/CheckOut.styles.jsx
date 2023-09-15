import styled from 'styled-components';

export const CheckOutContainer = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    // justify-content:center;
    align-items:center;
    font-family: 'Kalam', cursive;
    font-weight: 400;
`;

export const CheckOutHeaderContainer = styled.div`
    width:80%;
    height:20%;
    display:flex;
    justify-content:center;
    align-items:center;
    
`;

export const CheckOutHeader = styled.span`
    font-size:4rem;
`;

export const PriceDetailsContainer = styled.div`
    width:80%;
    height:40%;
    display:flex;
    flex-direction:column;
    // box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    // border-radius: 20px;
    // border-top-left-radius: 20px;
    // border-top-right-radius: 20px;
`;

export const CheckOutHeaderLogo = styled.img`

`;

export const PriceDetails = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:3.5rem;
    margin-bottom: 20px;
`;

export const PriceLable = styled.span`
    color:grey;
`;

export const PriceValue = styled.span`
    color:grey;
`;

export const TotalDetails = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:4rem;
`;

export const TotalLable = styled.span`

`;

export const TotalValue = styled.span`

`;

export const Video = styled.video`
    width:50%;
    height:100%;
    object-fit: cover;
`;