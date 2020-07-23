import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  ScrollView,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ListCard from '../../components/listcard';
import {FormInput} from '../../components/input';
import {FloatButton, SubmitButton} from '../../components/button';
import {Form} from '../../components/form';
import Section from '../../components/section';
import {useFetcher, useSite} from '../../hooks';
import Details from './details';

const MWAntenna = () => {
  const {siteid, siteDetails} = useSite();
  const {mwantennas} = siteDetails.anciliarytables;
  const {data, request, isLoading, error} = useFetcher('PATCH');
  const [modalVisible, setModalVisible] = useState(false);
  const addAntenna = () => {
    setModalVisible(true);
  };

  const editAntenna = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handlePress = ({
    antennatype,
    leg,
    installationheight,
    width,
    dishdiameter,
    remark,
  }) => {
    // request(
    //   `https://tryphena-staging.herokuapp.com/dash/site/mwantennas/${siteid}`,
    //   {
    //     antennatype,
    //     leg,
    //     installationheight,
    //     width,
    //     dishdiameter,
    //     remark,
    //   },
    // );
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.wrapper}>
          <TouchableOpacity
            onPress={closeModal}
            style={{padding: 16, alignItems: 'flex-end'}}>
            <MatIcon name="close" size={40} color="black" />
          </TouchableOpacity>
          <View style={styles.modalContainer}>
            <ScrollView
              style={{width: '100%'}}
              contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
              <Section header="Microwave Antenna Data">
                <Form>
                  <View>
                    <FormInput label="Antenna Type" field="antennatype" />
                  </View>
                  <View>
                    <FormInput label="Leg" field="leg" />
                  </View>
                  <View>
                    <FormInput
                      label="Installation Height"
                      field="installationheight"
                    />
                  </View>
                  <View>
                    <FormInput label="Width" field="width" />
                  </View>
                  <View>
                    <FormInput label="Dish Diameter" field="dishdiameter" />
                  </View>
                  <FormInput
                    label="Remark"
                    field="remark"
                    multiLine={true}
                    numberOfLines={3}
                    textAlignVertical="top"
                  />
                  <SubmitButton title="Save" onPress={handlePress}>
                    {isLoading && <ActivityIndicator color="white" />}
                  </SubmitButton>
                </Form>
              </Section>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <View>
        <FlatList
          data={mwantennas || []}
          renderItem={({item, index}) => (
            <ListCard
              sn={index + 1}
              title={item.antennatype}
              description={`Leg ${item.leg}`}>
              <View style={styles.details}>
                <TouchableOpacity onPress={editAntenna}>
                  <Icon
                    name="edit"
                    size={25}
                    color="#FF6666"
                    style={{alignSelf: 'flex-end'}}
                  />
                </TouchableOpacity>
                <Details
                  detailList={[
                    {'Installation Height': item.installationheight},
                    {'Dish Diameter': item.dishdiameter},
                    {Width: item.width},
                    {Remark: item.remark},
                  ]}
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
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    flex: 1,
    backgroundColor: '#F3F3F3e9',
  },
  wrapper: {
    backgroundColor: '#F3F3F3e9',
    flex: 1,
  },
});
export default MWAntenna;
