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
import ListCard from '../../components/listcard';
import {FormInput} from '../../components/input';
import {Form} from '../../components/form';
import {FloatButton, SubmitButton} from '../../components/button';
import {VerticalBlank} from '../../components/blank';
import Section from '../../components/section';
import {useFetcher, useSite} from '../../hooks';
import Details from './details';

const RFAntenna = ({route}) => {
  const {siteid, refreshData, siteDetails} = useSite();
  const {rfantennas} = siteDetails.anciliarytables;
  const [modalVisible, setModalVisible] = useState(false);
  const {data, request, isLoading, error} = useFetcher('PATCH');
  const addAntenna = () => {
    setModalVisible(true);
  };

  const editAntenna = () => {
    setModalVisible(true);
  };

  const handlePress = async ({
    leg,
    installationheight,
    length,
    breadth,
    width,
    remark,
    antennatype,
  }) => {
    await request(
      `https://tryphena-staging.herokuapp.com/dash/site/rfantennas/${siteid}`,
      {
        leg,
        installationheight,
        length,
        breadth,
        width,
        remark,
        antennatype,
      },
    );
    refreshData();
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <ScrollView
            style={{width: '100%'}}
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            <Section header="RFAntena Data">
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
                  <FormInput label="Length" field="length" />
                </View>
                <VerticalBlank />
                <View>
                  <FormInput label="Breadth" field="breadth" />
                </View>
                <VerticalBlank />
                <View>
                  <FormInput label="Width" field="width" />
                </View>
                <FormInput
                  label="Remark"
                  field="remark"
                  multiLine={true}
                  numberOfLines={3}
                  textAlignVertical="top"
                />
                <SubmitButton title="Add" onPress={handlePress}>
                  {isLoading && <ActivityIndicator color="white" />}
                </SubmitButton>
              </Form>
            </Section>
          </ScrollView>
        </View>
      </Modal>
      <View>
        <FlatList
          data={rfantennas || []}
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
                    {Breadth: item.breadth},
                    {Length: item.length},
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
    padding: 12,
    paddingVertical: 24,
  },
  modal: {
    padding: 16,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    flex: 1,
    backgroundColor: '#F3F3F3e9',
  },
});
export default RFAntenna;
