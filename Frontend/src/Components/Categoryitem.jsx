import  styled  from "styled-components"
import { Mobile } from "../Responciv"
import { Link } from "react-router-dom"


const Container = styled.div`
    flex: 1;
    margin: 3px;
    position: relative;
    ${Mobile({padding:"0px",border:"solid",borderColor:"red"})};
`
const Image = styled.img`
    width:100%;
    height: 70vh;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`

const Categoryitem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Link>
    </Container>
  )
}

export default Categoryitem