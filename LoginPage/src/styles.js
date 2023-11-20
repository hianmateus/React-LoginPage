import styled from 'styled-components';
import Background from './images/image1.svg'



export const Container = styled.div`
   background: url('${Background}');
   background-size: cover;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 40px;
   height: 100vh;

`
export const Image = styled.img`

`

export const H1 = styled.h1`
text-align: center;
color: #FFF;
font-family: Roboto;
font-size: 34px;
font-weight: 700;
margin-bottom: 61px;
`

export const Container2 = styled.div`
border-radius: 61px 61px 0px 0px;
background: linear-gradient(157deg, rgba(255, 255, 255, 0.60) 0.84%, rgba(255, 255, 255, 0.60) 0.85%, rgba(255, 255, 255, 0.15) 100%);
padding: 50px 40px;
display: flex;
flex-direction: column;
height: 100%;
`

export const Label = styled.p`
color: #EEE;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 700;
margin-left: 21px;
font-weight: 400;
`

export const Input = styled.input`
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
border: none;
height: 58px;
width: 342px;
margin-bottom: 44px;
padding-left: 25px;

color: #FFF;
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;

`

export const Button = styled.button`
border-radius: 14px;
background: var(--templates-5-color-1, rgba(0, 0, 0, 0.80));
height: 74px;
width: 342px;
color: #FFF;

font-family: Roboto;
font-size: 17px;
font-style: normal;
font-weight: 700;

cursor: pointer;

display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`

export const UserList = styled.li`
margin-top: 20px;
display: flex;
align-items: center;
justify-content: space-around;
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
border: none;
height: 58px;
width: 342px;

p{
    color: #FFF;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

button {
    cursor: pointer;
    background: none;
}

`



