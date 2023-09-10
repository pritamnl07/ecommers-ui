import { Email, Facebook, Instagram, LinkedIn, Phone, Room, Telegram, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import { Mobile } from "../Responciv"


const Container = styled.div`
    display: flex;
    ${Mobile({height:"550px",})}
`
const Left =styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    ${Mobile({width:"160px"})}
`
const Logo = styled.h1`
    margin: 15px;
    ${Mobile({margin:"10px"})}
`
const Desc = styled.p`
    margin: 15px 10px;
    ${Mobile({fontSize:"15px"})}
`
const SocialContainer = styled.div`
    display:flex;
    margin:15px;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 5px;
    color: #f2f2f2;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const Center =styled.div`
    flex:1;
    ${Mobile({display:"none"})}
`
const Title = styled.h3`
    margin: 30px;
    ${Mobile({margin:"25px 30px"})}
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 12px;
`
const Right =styled.div`
    flex:1;
    padding: 20px;
    ${Mobile({padding:"0px 10px"})}
`
const ContactItem = styled.div`
    margin-bottom: 15px;
    display: flex;
    align-items: center;
`
 const Payment = styled.img`
    width: 50%;
    ${Mobile({width:"100%"})}
 `

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>PRITAM.</Logo>
            <Desc>
            There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon >
                <SocialIcon color="FF4142">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="00a4d3">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="1c38b0">
                    <LinkedIn/>
                </SocialIcon>
                <SocialIcon color="007f89">
                    <Telegram/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>UseFul Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>+91 9876543210
            </ContactItem>
            <ContactItem>
                <Email style={{marginRight:"10px"}}/> pritam@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer