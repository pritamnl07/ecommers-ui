import styled from "styled-components"
import { Mobile } from "../Responciv"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: /*linear-gradient(
      rgba(255, 255, 255, 0.238),
      rgba(255, 255, 255, 0.14)
    ),*/
    url("https://cdna.artstation.com/p/assets/images/images/045/672/440/original/a-o-t-spiderweb-animate-1080-450.gif?1643254738")
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Wrapper = styled.div`
    width: 20%;
    padding: 20px;
    background-color: #ffffff7c;
    ${Mobile({width:"45%",marginTop:"-70px"})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    //justify-content: center;
`
const Input = styled.input`
    display: flex;
    border-radius: 10px;
    border:none;
    border-bottom: 1px solid black;
    width: 100%;
    height: 25%;
    margin: 15px 0px;
    padding:10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    margin: 10px 33.33%;
    padding: 10px 20px;
    align-items:center;
    background-color: teal;
    color: white;
    cursor: pointer;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 17px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm password"/>
                <Button>LogIn</Button>
                <Link>Forgat Password</Link>
                <Link>Create a new Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login