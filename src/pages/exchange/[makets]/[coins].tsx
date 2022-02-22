import React from 'react';
import styled from '@emotion/styled';

function Exchanges() {
    return (
        <Container>
            <CoinList>sdfjadksl;</CoinList>
            <CoinInfo>sdfjadksl;</CoinInfo>
            <OrderBook>sdfjadksl;</OrderBook>
        </Container>
    );
}

const Container = styled.section`
    padding: 20px;
    display: flex;
    justify-content: space-between;
`;

const CoinList = styled.div`
    flex-basis: 20%;
    box-shadow: rgb(0 8 50 / 10%) 0px 4px 16px 0px, rgb(0 0 0 / 5%) 0px -3px 0px 0px inset;
    border: 1px solid rgb(220, 223, 227);
    padding: 15px;
    border-radius: 16px;
`;

const CoinInfo = styled.div`
    flex-basis: calc(60% - 40px);
    box-shadow: rgb(0 8 50 / 10%) 0px 4px 16px 0px, rgb(0 0 0 / 5%) 0px -3px 0px 0px inset;
    border: 1px solid rgb(220, 223, 227);
    padding: 15px;
    border-radius: 16px;
`;

const OrderBook = styled.div`
    flex-basis: 20%;
    box-shadow: rgb(0 8 50 / 10%) 0px 4px 16px 0px, rgb(0 0 0 / 5%) 0px -3px 0px 0px inset;
    border: 1px solid rgb(220, 223, 227);
    padding: 15px;
    border-radius: 16px;
`;

export default Exchanges;
