import { Route, Link, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'


const StyledForm = styled.div`
    
    width:20%;
    height:auto;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   margin-left:45%;
    
 
`


export default function Form(props){

    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (event) => {
      submit();
    };
  
    const onChange = (event) => {
      const { name, value, type, checked } = event.target;
      const valueToUse = type === "checkbox" ? checked : value;
      change(name, valueToUse);
    };
  


const history = useHistory()
const routeToHome = () => {
    history.push('/')
}


return (
     <StyledForm>
         <button onClick={routeToHome}>Home</button>
         <form onSubmit={onSubmit}>
      <div>
        <h2>Create Account</h2>

        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.pep}</div>
          <div>{errors.exCheese}</div>
          <div>{errors.sausage}</div>
          <div>{errors.bacon}</div>
          <div>{errors.onions}</div>
          <div>{errors.mushroom}</div>
        </div>
      </div>

      <div className="form-group inputs">
        <h4>contact Information</h4>

        <label>
          Name
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          />
          <br />
        </label>

        <label>
          Email
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="text"
          />
          <br />
        </label>
        
        {/* // DROPDOWN */}
            
        <label>
          Size
          <select onChange={onChange} value={values.size} name="role">
            <option value="">- Select an option -</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="exlarge">Extra Large</option>
          </select>
        </label>

        <label>
          Special Instructions
          <input
            value={values.special}
            onChange={onChange}
            name="special"
            type="text"
          />
          <br />
        </label>

        {/* CHECKBOXES */}

        <label> 
            <h3>Toppings</h3> 
            </label>
        <br></br>
        <label>
          Peperoni
          <input
            type="checkbox"
            name="pep"
            onChange={onChange}
            checked={values.pep}
          />
        </label>
        <label>
          extra cheese
          <input
            type="checkbox"
            name="exCheese"
            onChange={onChange}
            checked={values.exCheese}
          />
        </label>
        <label>
          Sausage
          <input
            type="checkbox"
            name="sausage"
            onChange={onChange}
            checked={values.sausage}
          />
        </label>
        <label>
          Bacon
          <input
            type="checkbox"
            name="bacon"
            onChange={onChange}
            checked={values.bacon}
          />
        </label>
        <label>
          Onions
          <input
            type="checkbox"
            name="onions"
            onChange={onChange}
            checked={values.onions}
          />
        </label>
        <label>
          Mushrooms
          <input
            type="checkbox"
            name="mushroom"
            onChange={onChange}
            checked={values.mushroom}
          />
        </label>
      </div>
      <button id='submitBtn' disabled={disabled}>Submit Order</button>
    </form>
         
     </StyledForm>
    )
}