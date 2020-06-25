import React from 'react';
import Styled from 'styled-components';
import {Text, View, StyleSheet} from 'react-native';

const Section = props => {
  return (
    <Container header={props.header}>
      <Text style={styles.header}>{props.header}</Text>
      {props.children}
    </Container>
  );
};

const Container = Styled.View`
  background-color: white;
  padding: 12px;
  margin: ${({header}) => (header ? '16px 8px 16px 8px' : '4px 8px')};
  border-radius: 4px;
`;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 4,
  },
  header: {
    position: 'absolute',
    top: -12,
    left: 10,
    // fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
});
export default Section;
