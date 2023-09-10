import  styled  from "styled-components";
import { categories } from "../data";
import Categoryitem from "./Categoryitem";
import { Mobile } from "../Responciv";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${Mobile({display:"block"})};
`

const Category = () => {
  return (
    <Container>
        {categories.map(item=>(
            <Categoryitem item={item}/>
        ))}
    </Container>
  )
}

export default Category