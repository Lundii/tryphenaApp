import React, {useMemo, useState, useEffect} from 'react';
import {BodyText} from '../../components/text';
import {Input} from '../../components/input';
import {TouchIcon} from '../../components/icon';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const ExtraDetails = ({headers, question, setObservationState}) => {
  console.log(question, setObservationState);
  const [rowData, setRowData] = useState([]);
  const [inputData, setInputData] = useState({});
  const addRow = () => {
    setRowData(prevState => [...prevState, inputData]);
  };

  const handleInputData = (field, value) => {
    setInputData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };
  const handleDeleteRow = index => {
    setRowData(prevState => {
      return prevState.filter((item, ind) => index !== ind);
    });
  };

  useEffect(() => {
    setObservationState(prevState => ({
      ...prevState,
      extraDetails: rowData,
    }));
  }, [rowData, setObservationState]);

  const rowHeaders = useMemo(() => {
    return headers.map(header => (
      <View style={{flex: 2}}>
        <BodyText>{header}</BodyText>
      </View>
    ));
  }, [headers]);

  const detailsInput = useMemo(() => {
    return headers.map(header => (
      <View style={{flex: 3, marginRight: 12}}>
        <Input
          label={header}
          onChange={value => {
            handleInputData(header, value);
          }}
        />
      </View>
    ));
  }, [headers]);

  const rows = useMemo(() => {
    return rowData.map((rowData, index) => (
      <MemberRow
        rowData={rowData}
        headers={headers}
        index={index}
        deleteRow={handleDeleteRow}
      />
    ));
  }, [headers, rowData]);
  return (
    <View style={styles.wrapper}>
      {rowData.length ? (
        <View>
          <View style={styles.header}>{rowHeaders}</View>
          <View>{rows}</View>
        </View>
      ) : null}
      <View style={{...styles.row, backgroundColor: 'white'}}>
        {detailsInput}
        <TouchIcon name="plus-circle" onPress={addRow} />
      </View>
    </View>
  );
};

const MemberRow = ({rowData, headers, index, deleteRow}) => {
  const handleDeleteRow = () => {
    deleteRow(index);
  };
  const isEven = useMemo(() => {
    if (index % 2 === 0) {
      return true;
    }
    return false;
  }, [index]);

  const row = useMemo(() => {
    return headers.map(header => (
      <View style={{flex: 2}}>
        <BodyText>{rowData[`${header}`]}</BodyText>
      </View>
    ));
  }, [rowData, headers]);
  return (
    <View
      style={{
        ...styles.row,
        backgroundColor: isEven ? '#ECECEC' : 'white',
        alignItems: 'center',
      }}>
      {row}
      <TouchIcon name="trash-can-outline" onPress={handleDeleteRow} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  header: {
    flexDirection: 'row',
    backgroundColor: '#99E2B2',
    padding: 12,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#ECECEC',
  },
});

export default ExtraDetails;
