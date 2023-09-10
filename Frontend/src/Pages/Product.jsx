import styled from "styled-components"
import React from 'react'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import { Add, Remove } from "@mui/icons-material"
import { Mobile } from "../Responciv"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { publicRequest } from "../requestMethods"
import { addProduct } from "../redux/cartRedux"
import { useDispatch } from "react-redux"

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${Mobile({padding:"10px",flexDirection:"column"})}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${Mobile({ height: "40vh" })}

`
const InfoCointaner = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${Mobile({ padding: "10px" })}
`
const Title = styled.h2`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.div`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${Mobile({ width: "100%" })}

`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`

`

const AddCountainer = styled.div`
    width: 50%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    ${Mobile({ width: "100%" })}

`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #dfdfdf;
    }
`

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1)
    const [color,setColor] = useState("")
    const [size,setSize] = useState("")
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async ()=>{
            try{
                const res = await publicRequest.get("/product/find/"+id)
                setProduct(res.data)
                console.log("getProduct",res.data)
            }catch{

            }
        };
        getProduct()
        
    },[id]);
    //console.log("color",product.color);
    const itemQuantity = (type) =>{
        if(type === "dec"){
            quantity > 1 && setQuantity(quantity - 1);
        }else{
            setQuantity(quantity + 1);
        }
        console.log("Quen",quantity)
    }

    const handleClick = () =>{ console.log("click",product,quantity)
        dispatch(
            addProduct({product,quantity})
        );
    };

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src={product.image}/>
            </ImgContainer>
            <InfoCointaner>
                <Title>{product.titel}</Title>
                <Desc>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                 venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                 iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                 tortor pretium ut. Curabitur elit justo, consequat id
                 condimentum ac, volutpat ornare.
                </Desc>
                <Price>$ {product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color?.map((c) => (
                            <FilterColor color={c} key={c} onClick={()=> setColor(c)}/>
                        ))}
                        {/* {<FilterColor color={product.color} key={product.color}/>} */}
                    </Filter>
                    <Filter>
                        <FilterTitle>size</FilterTitle>
                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
                            {product.size?.map( (s) => (
                                <FilterSizeOption key={s}>{s}</FilterSizeOption>
                            ))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddCountainer>
                    <AmountContainer>
                        <Remove onClick={()=> itemQuantity("dec")} />
                        <Amount>{quantity}</Amount>
                        <Add onClick={()=> itemQuantity("inc")} />
                    </AmountContainer>
                    <Button onClick={handleClick()}>ADD TO CART</Button>
                </AddCountainer>
            </InfoCointaner>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product