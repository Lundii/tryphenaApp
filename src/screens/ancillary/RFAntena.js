import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ListCard from '../../components/listcard';
import {Input} from '../../components/input';
import {BodyText} from '../../components/text';
import {FloatButton} from '../../components/button';
import {VerticalBlank} from '../../components/blank';
import {Button} from '../../components/button';
import Section from '../../components/section';

const DATA = [
  {
    sn: 1,
    type: 'Faded',
    leg: 'LEG A',
  },
  {
    sn: 2,
    type: 'Faded',
    leg: 'LEG B',
  },
  {
    sn: 3,
    type: 'Faded',
    leg: 'LEG C',
  },
  {
    sn: 4,
    type: 'Faded',
    leg: 'LEG A',
  },
  {
    sn: 5,
    type: 'Faded',
    leg: 'LEG B',
  },
  {
    sn: 6,
    type: 'Faded',
    leg: 'LEG A',
  },
];

const RFAntenna = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const addAntenna = () => {
    setModalVisible(true);
  };

  const editAntenna = () => {
    setModalVisible(true);
  };
  const saveAntenna = () => {
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Modal visible={modalVisible} transparent animationType="slide">
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 8,
            flex: 1,
            backgroundColor: '#F3F3F3e9',
          }}>
          <View style={{width: '100%'}}>
            <Section header="RFAntena Data">
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Input label="Leg" />
                </View>
                <VerticalBlank />
                <View style={{flex: 1}}>
                  <Input label="Inst.. Height" />
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Input label="Length" />
                </View>
                <VerticalBlank />
                <View style={{flex: 1}}>
                  <Input label="Breadth" />
                </View>
                <VerticalBlank />
                <View style={{flex: 1}}>
                  <Input label="Width" />
                </View>
              </View>
              <Input
                label="Remark"
                multiLine={true}
                numberOfLines={3}
                textAlignVertical="top"
              />
              <Button title="Save" onPress={saveAntenna} />
            </Section>
          </View>
        </View>
      </Modal>
      <View>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <ListCard sn={item.sn} title={item.type} description={item.leg}>
              <View style={styles.details}>
                <TouchableOpacity onPress={editAntenna}>
                  <Icon
                    name="edit"
                    size={25}
                    color="#FF6666"
                    style={{alignSelf: 'flex-end'}}
                  />
                </TouchableOpacity>
                <BodyText>Installation height: </BodyText>
                <BodyText>Length: </BodyText>
                <BodyText>Breadth: </BodyText>
                <BodyText>Width: </BodyText>
                <Input
                  label="Remark"
                  multiLine={true}
                  numberOfLines={2}
                  textAlignVertical="top"
                />
              </View>
            </ListCard>
          )}
          keyExtractor={item => item.sn}
        />
      </View>
      <FloatButton onPress={addAntenna} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  details: {
    backgroundColor: 'white',
    padding: 8,
    paddingLeft: 64,
    paddingRight: 24,
  },
  modal: {
    padding: 16,
  },
});
export default RFAntenna;
