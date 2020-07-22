import React, {useState, useEffect} from 'react';
import {
  FlatList,
  View,
  SafeAreaView,
  StatusBar,
  Modal,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FormInput} from '../../components/input';
import ListCard from '../../components/listcard';
import {FloatButton, SubmitButton} from '../../components/button';
import Section from '../../components/section';
import {Form} from '../../components/form';
import {useFetcher} from '../../hooks';
import {BodyText} from '../../components/text';

const validateSiteId = value => {
  const regex = /IHS_[A-Z]{3}_[0-9]{3,4}[A-Z]/;
  return !regex.test(value) ? 'Invalid site id' : null;
};

const Allsites = ({navigation}) => {
  const {data: sites, request, isLoading, error} = useFetcher();
  const {
    data: newSite,
    request: createRequest,
    isLoading: createIsLoading,
    error: errorCreating,
  } = useFetcher('POST');
  const [modalVisible, setModalVisible] = useState(false);
  const addNewSite = () => {
    setModalVisible(true);
  };

  const editAntenna = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    console.log(errorCreating);
  }, [errorCreating]);
  const handlePress = site => {
    navigation.navigate('SiteCards', site);
  };
  const handleCreateSite = async ({siteid, address, latitude, longitude}) => {
    await createRequest('https://tryphena-staging.herokuapp.com/dash/site', {
      siteid,
      address,
      latitude,
      longitude,
    });
    setModalVisible(false);
  };

  useEffect(() => {
    request('https://tryphena-staging.herokuapp.com/dash/sites');
  }, [newSite, request]);

  if (isLoading) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator color="#FF6666" size="large" />
      </View>
    );
  }
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
            <View style={{width: '100%'}}>
              <Section header="Enter site details">
                <Form>
                  <FormInput
                    label="Site ID"
                    field="siteid"
                    validate={validateSiteId}
                  />
                  <FormInput
                    label="Address"
                    field="address"
                    validate={value => (value ? null : 'Address is required')}
                  />
                  <FormInput
                    label="Latitude"
                    field="latitude"
                    validate={value => (value ? null : 'Latitude is required')}
                  />
                  <FormInput
                    label="Longitude"
                    field="longitude"
                    validate={value => (value ? null : 'Longitude is required')}
                  />
                  <SubmitButton
                    title="Create New Site"
                    onPress={handleCreateSite}>
                    {createIsLoading && <ActivityIndicator color="white" />}
                  </SubmitButton>
                </Form>
              </Section>
            </View>
          </View>
        </View>
      </Modal>
      <View>
        <StatusBar backgroundColor="#E43F3F" />
      </View>
      <View>
        <FlatList
          data={sites || []}
          renderItem={({item, index}) => (
            <ListCard
              sn={index + 1}
              title={item.siteid}
              description={item.address}
              handlePress={() => handlePress(item)}
            />
          )}
          keyExtractor={item => item.sn}
        />
      </View>
      <FloatButton onPress={addNewSite} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F3F3F3e9',
    flex: 1,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    flex: 1,
  },
});

export default Allsites;
