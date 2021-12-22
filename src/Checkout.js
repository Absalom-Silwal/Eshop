import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './textField';
import * as Yup from 'yup';

export const Checkout = () => {
  const validate = Yup.object({
    Name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    
    Billing_Address: Yup.string()
      .required('Billing Address is required'),
    Delivery_Address: Yup.string()
      .required('DeliveryAddress  is required'),
    Telephone_No: Yup.number()
      
      .required('telephone number is required'),
  })
  return (
    <Formik
      initialValues={{
        Name: '',
       
        Billing_Address: '',
        Delivery_Address: '',
        Telephone_No: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 >checkout</h1>
          <Form>
            <TextField label="Name" name="Name" type="text" />
            
            <TextField label="Billing_Address" name="Billing_Address" type="text" />
            <TextField label="Delivery_Address" name="delivery_Address" type="password" />
            <TextField label="Telephone_No" name="Telephone_No" type="password" />
            
            <button  >Continue Checkout</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}