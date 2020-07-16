import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import FormProvider, {FormContext} from './formcontext';

const Form = ({onSubmit, children}) => (
  <FormProvider>
    <FormInner onSubmit={onSubmit}>{children}</FormInner>
  </FormProvider>
);

const FormInner = ({children}) => {
  return <View>{children}</View>;
};

export const useField = field => {
  const [formValues, setFormValues] = useContext(FormContext);

  const setField = newValue => {
    setFormValues(prevState => ({
      ...prevState,
      [field]: newValue,
    }));
  };

  useEffect(() => {
    setFormValues(prevState => ({
      ...prevState,
      [field]: '',
    }));
  }, [field, setFormValues]);

  return {
    setField,
  };
};

export default Form;
