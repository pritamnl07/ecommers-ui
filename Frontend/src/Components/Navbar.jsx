import { ShoppingCart } from '@mui/icons-material';
import Search from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
//import React from 'react'
import styled from 'styled-components';
import { Mobile } from '../Responciv';
import { useSelector } from "react-redux";


const Container = styled.div` 
    height: 60px;
    ${Mobile({height:"50px"})}
`
const Wraper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${Mobile({padding:"10px 0px"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 20px;
`
const Language = styled.span`
    font-style: 14px;
    cursor: pointer;
    ${Mobile({display:"none"})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${Mobile({margin:"0px 10px"})}
`
const Input = styled.input`
    border: none;
    ${Mobile({width:"50px",justifyContent:"left"})}
`
const Center = styled.div`
    flex: 1;
    align-items: center;
    display: flex;
`
const Logo = styled.h1`
    font-weight: bold;
    //padding-left: 35%;
    ${Mobile({fontSize:"22px"})}
`
const Right = styled.div`
    flex: 1;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${Mobile({flex:2 ,justifyContent:"center",paddingRight:"10px"})}
`
const ManuItem = styled.div`
    font-style: 15px;
    cursor: pointer;
    margin-left: 25px;
    ${Mobile({fontSize:"12px", marginLeft:"10px"})}
`

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
//console.log(State)

  return (
    <Container>
        <Wraper>
           <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray",fontSize:16}}/>
                </SearchContainer>
           </Left>
           <Center><Logo>Pritam.</Logo></Center>
           <Right>
                <ManuItem>REGISTER</ManuItem>
                <ManuItem>SIGN IN</ManuItem>
                <ManuItem>
                <Badge badgeContent={quantity} color="secondary">
                    <ShoppingCart/>
                </Badge>
                </ManuItem>

           </Right>
        </Wraper>
    </Container>
  );
}

export default Navbar