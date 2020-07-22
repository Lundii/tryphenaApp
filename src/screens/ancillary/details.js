import React, {useMemo} from 'react';
import {BodyText} from '../../components/text';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components';

const Details = ({detailList}) => {
  const getdetails = useMemo(() => {
    return (detailList || []).map((item, index) => {
      const key = Object.keys(item);
      return (
        <Row even={index % 2}>
          <BodyText style={styles.label}>{key[0]}</BodyText>
          <BodyText style={styled.value}>{item[key]}</BodyText>
        </Row>
      );
    });
  }, [detailList]);

  return <View style={styles.wrapper}>{getdetails}</View>;
};

const Row = styled.View`
  padding: 12px;
  background-color: ${({even}) => (even ? 'white' : '#ececec')};
  flex-direction: row;
`;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  label: {
    flex: 2,
  },
  value: {
    flex: 1,
  },
});

export default Details;
