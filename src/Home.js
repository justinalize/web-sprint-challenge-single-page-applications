import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const StyledHeader = styled.div`

    display: flex;
    flex-direction:column;
    align-items:center;
  

`


export default function Home(props){

const history = useHistory()

const routeToPizza = () => {

    history.push('/pizza')
}


return (
     <StyledHeader>
        

         <button onClick={routeToPizza}>Pizza Maker</button>
         
     </StyledHeader>
    )
}