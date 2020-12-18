import React, { useEffect, useState } from "react"
import Home from './Home'
import axios from "axios"
import schema from "./formSchema";
import * as yup from "yup"
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import Form from './Form'
import Pizza from './Pizza'

const StyledH1 = styled.h1`
    text-align:center;
`

const initialFormValues = { name: "", email: "", special: "", pep: false,  exCheese: false, sausage: false, bacon: false, onions: false, mushroom: false, };
const initialFormErrors = { name: "", email: "", special: "" };

const App = () => {

  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);


  const postNewUser = (newUser) => {
    axios
     
      .post("https://reqres.in/api/users", newUser)
      .then(response => {
        setUsers([response.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch(error => {
        console.log(error);
        debugger;
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      special: formValues.special.trim(),
      size: formValues.size.trim(),
      toppings: ["pep", "exCheese", "sausage", "bacon", "onions","mushroom"].filter(
        (topping) => formValues[topping]
      ),
    };
    postNewUser(newUser);
  };


  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
console.log(users)

  return (
<div>

    <StyledH1>Lambda Eats</StyledH1>  

    <Route exact path='/'>
      <Home />
    </Route>

    <Route path='/pizza'>
        <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        />
    </Route>
    {users.map((pizza) => {
        return <Pizza key={pizza.id} details={pizza} />;
      })}
</div>
  );
};
export default App;
