import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Recipe() {
    let params = useParams();
    const [details,SetDetails]=useState({});
    const [activeTab,SetActiveTab]=useState("instructions");
    const fetchDetails= async ()=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailedData= await data.json();
        SetDetails(detailedData);
    } 
    useEffect(()=>{
        fetchDetails();
    },[params.name])
  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
        </div>
        <Info>
            <Button className={activeTab==="instructions" ? "active" : " "} onClick={()=>SetActiveTab("instructions")}>Instructions</Button>
            <Button className={activeTab==="ingredients" ? "active" : " "} onClick={()=>SetActiveTab("ingredients")}>Ingredients</Button>
            {activeTab==="instructions" && (
                <div>
                    <h4 dangerouslySetInnerHTML={{__html:details.summary}}></h4>
                    <br/>
                    <h4 dangerouslySetInnerHTML={{__html:details.instructions}}></h4>
                </div>
            )}
            {activeTab==="ingredients" && (
                <ul>
                    {details.extendedIngredients.map((ingredient)=>(
                        <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                </ul>
            )}
        </Info>
    </DetailWrapper>
  )
}
const DetailWrapper=styled.div`
    margin-top:10rem;
    margin-bottom:5rem;
    display:flex;
    .active{
        background: linear-gradient(35deg,#494949,#313131);
        color:white;
    }
    h2{
        margin-bottom:2rem;
    }
    li{
        font-size:1.5rem;
        line-height:2rem;
    }
    ul{
        margin-top:2rem;
    }
`

const Button=styled.button`
    &:hover{
        background: linear-gradient(35deg,#494949,#313131);
        transition: all 0.6s;
        color:white;
    }
    padding:1rem 2rem;
    color:#313131;
    background:white;
    border: 2px solid black;
    margin-right:2rem;
    font-weight:600;
    margin-bottom:1rem;

`
const Info=styled.div`
    margin-left:10rem;
`

export default Recipe