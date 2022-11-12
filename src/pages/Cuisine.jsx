import React , { useEffect, useState } from 'react';
import {useParams,Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import styled from 'styled-components';



function Cuisine() {
    const [cuisine, SetCuisine]=useState([]);
    let params = useParams();
    const getCuisine= async (name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=100`);
        const recipes = await data.json();
        SetCuisine(recipes.results);
    } 
    useEffect(()=>{
        getCuisine(params.type)
    },[params.type])
  return (
        <Grid
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.7}}
        >
            {cuisine.map((item)=>{
                return(
                    <Card key={item.id}>
                        <Link to={"/recipe/" + item.id}>
                            <img src={item.image} alt="" />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
  )
}

const Grid=styled(motion.div)`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto;
    grid-gap: 3rem;
`
const Card=styled(motion.div)`
    img{
        border-radius:2rem;
        width:100%;
    }
    a{
        text-decoration:none;
    }
    h4{
        text-align:center;
        padding:1rem;
    }
`

export default Cuisine