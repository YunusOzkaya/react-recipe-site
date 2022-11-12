import {FaPizzaSlice, FaHamburger,FaFish} from 'react-icons/fa';
import {GiNoodles, GiChopsticks,GiDonerKebab} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'



function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>
        {/*<SLink to={'/cuisine/Turkish'}>
            <GiDonerKebab/>
            <h4>Turkish</h4>
        </SLink>
        <SLink to={'/cuisine/Pinoy'}> 
            <FaFish/>
            <h4>Pinoy</h4>
        </SLink>*/}
    </List>
  )
}
const List= styled.div`
    display:flex;
    justify-content:center;
    margin:2rem 0rem;
`
const SLink=styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    margin-right:2rem;
    text-decoration:none;
    background: linear-gradient(35deg, #494949,#313131);
    color:#F9F6EE;
    width:6rem;
    height:6rem;
    cursor:pointer;
    transfor:scale(0.8);
    h4{
       color:#F9F6EE;
       font-size:0.8rem;
    }
    svg{
        color:#F9F6EE;
        font-size:1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121,#e94057);
        h4{
            color:#F9F6EE;
            font-size:0.8rem;
         }
         svg{
             color:#F9F6EE;
             font-size:1.5rem;
         }
    }
`

export default Category