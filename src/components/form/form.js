import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import FormProvider, {FormContext} from './formcontext';
import {useDebounce} from '../../hooks';

const Form = ({autoSubmit, debounceDelayTime, children}) => (
  <FormProvider>
    <FormInner autoSubmit={autoSubmit} debounceDelayTime={debounceDelayTime}>
      {children}
    </FormInner>
  </FormProvider>
);

const FormInner = ({autoSubmit, debounceDelayTime, children}) => {
  const [formValues, setFormValues] = useContext(FormContext);
  const debounceFunc = useDebounce(
    autoSubmit || (() => {}),
    debounceDelayTime || 2000,
  );

  useEffect(() => {
    if (!autoSubmit) {
      return;
    }
    debounceFunc(formValues);
  }, [autoSubmit, debounceDelayTime, formValues, debounceFunc]);

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
