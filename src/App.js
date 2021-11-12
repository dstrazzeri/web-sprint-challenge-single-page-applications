import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import Header from "./Header";
import Home from "./Home";
import Order from "./Order";
import FormSchema from "./FormSchema";

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  olives: false,
  bacon: false,
  mushrooms: false,
  special: '',
}

const initialFormErrors = {
  name: '',
  size: ''
}

const initialDisabled = true;

const App = () => {
  const [ pizzaOrder, setPizzaOrder ] = useState([]);
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ disabled, setDisabled ] = useState(initialDisabled);

  const updateForm = (inputName, inputValue) => {
    validate(inputName, inputValue)
    setFormValues({ ...formValues, [inputName]: inputValue})
  }
  const postNewOrder = (newOrder) => {
    axios.post(`https://reqres.in/api/orders`, newOrder)
      .then(res=>{
         console.log(res.data, setPizzaOrder)
      })
      .catch(err=>{
        console.error(err)
      })
      .finally(() => setFormValues(initialFormValues))
    }

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      olives: formValues.olives,
      bacon: formValues.bacon,
      mushrooms: formValues.mushrooms,
      special: formValues.special.trim(),
    }
    postNewOrder(newOrder)
  }

  const validate = (name, value) =>{
    yup.reach(FormSchema, name).validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: ''})
      })
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]})
      )
  }

  useEffect(() => {
    FormSchema.isValid(formValues)
    .then(valid =>{
      setDisabled(!valid)
    })
    .finally(() => ('cleaning'))
  }, [formValues])

  return (
    <>
      <h1>Lambda Eats</h1>
      <Header/>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/pizza'>
        <Order
          formValues={formValues}
          submitForm={submitForm}
          updateForm={updateForm}
          formErrors={formErrors}
          disabled={disabled}
        />
      </Route>
    </>
  );
};
export default App;
