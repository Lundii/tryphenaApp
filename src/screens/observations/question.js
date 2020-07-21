import React, {
  useState,
  Children,
  cloneElement,
  isValidElement,
  useMemo,
  useEffect,
} from 'react';
import {View, StyleSheet} from 'react-native';
import {BodyText} from '../../components/text';
import Switch from '../../components/switch';
import {Form} from '../../components/form';

const Question = ({question, children}) => {
  const [choice, setChoice] = useState(false);
  const [observationState, setObservationState] = useState([]);
  const handleChange = value => {
    setChoice(value);
  };

  const handleAutoSubmit = value => {
    console.log(value);
    console.log(observationState);
    // setObservationState(prevState => ({
    //   ...prevState,
    //   answer: value[`${question}`],
    // }));
  };

  useEffect(() => {
    console.log(observationState);
  }, [choice, observationState]);

  const childrenWithProps = useMemo(() => {
    return Children.map(children, child => {
      return cloneElement(child, {setObservationState, question});
    });
  }, [children, question, setObservationState]);
  return (
    <View style={styles.wrapper}>
      <Form autoSubmit={handleAutoSubmit} debounceDelayTime={2000}>
        <View style={styles.container}>
          <View style={styles.textCont}>
            <BodyText>{question}</BodyText>
          </View>
          <View style={styles.switchCont}>
            <Switch onChange={handleChange} field={question} />
          </View>
        </View>
        {choice && childrenWithProps}
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 16,
  },
  textCont: {
    flex: 3,
    paddingRight: 2,
  },
  switchCont: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default Question;
