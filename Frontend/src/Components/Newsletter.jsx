import { Send } from '@mui/icons-material'
import styled from 'styled-components'
import { Mobile } from '../Responciv'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${Mobile({padding:"0px 20px",height:"50vh"})}
`
const Title = styled.h1`
    font-style: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${Mobile({justifyContent:"center",border:"none"})}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    ${Mobile({paddingLeft:"10px",border:"1px solid lightgray"})}
`
const Button = styled.button`
    flex:1;
    border: none;
    background-color: teal;
    color: white;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder='Your E-mail'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter