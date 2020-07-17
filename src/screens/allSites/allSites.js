import React, {useState, useEffect} from 'react';
import {FlatList, View, SafeAreaView, StatusBar, Modal} from 'react-native';
import Input from '../../components/input';
import ListCard from '../../components/listcard';
import {FloatButton, SubmitButton} from '../../components/button';
import Section from '../../components/section';
import {VerticalBlank} from '../../components/blank';
import {Form} from '../../components/form';
import {useFetcher} from '../../hooks';

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
    if (!sites) {
      request('https://tryphena-staging.herokuapp.com/dash/sites');
    }
  }, [sites, newSite, request]);
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
            <Section header="Enter site details">
              <Form>
                <Input
                  label="Site ID"
                  field="siteid"
                  validate={value => (value ? null : 'Site is is required')}
                />
                <Input
                  label="Address"
                  field="address"
                  validate={value => (value ? null : 'Address is required')}
                />
                <Input
                  label="Latitude"
                  field="latitude"
                  validate={value => (value ? null : 'Latitude is required')}
                />
                <Input
                  label="Longitude"
                  field="longitude"
                  validate={value => (value ? null : 'Longitude is required')}
                />
                <SubmitButton
                  title="Create New Site"
                  onPress={handleCreateSite}
                />
              </Form>
            </Section>
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

export default Allsites;
