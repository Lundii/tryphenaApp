import React, {useContext, useEffect} from 'react';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, StyleSheet} from 'react-native';
import Card from './card';
import {useSite} from '../../hooks';
import {BodyText} from '../../components/text';

const SiteCards = ({route, navigation}) => {
  const {_id, siteid, address} = route.params;
  const {setSiteId} = useSite();

  useEffect(() => {
    setSiteId(_id);
  }, [setSiteId, _id]);
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <BodyText
          style={{
            fontSize: 20,
            fontFamily: 'Montserrat-SemiBold',
          }}>
          {siteid}
        </BodyText>
        <BodyText>{address}</BodyText>
      </View>
      <View style={styles.row}>
        <Card
          title="Prelimary Instuctions"
          navigation={navigation}
          to="Instructions">
          <MatIcon name="text-subject" size={40} color="#FF6666" />
        </Card>
        <BlankElement />
        <Card
          title="Site Details"
          navigation={navigation}
          to="SiteDetails"
          params={route.params}>
          <MatIcon name="note-outline" size={40} color="#FF6666" />
        </Card>
      </View>
      <View style={styles.row}>
        <Card title="Observations" navigation={navigation} to="Observations">
          <MatIcon name="eye-outline" size={40} color="#FF6666" />
        </Card>
        <BlankElement />
        <Card
          title="Tower Member Mapping"
          navigation={navigation}
          to="Tower Member Mapping">
          <MatIcon name="transmission-tower" size={40} color="#FF6666" />
        </Card>
      </View>
      <View style={styles.row}>
        <Card title="Pictures" navigation={navigation}>
          <MatIcon
            name="picture-in-picture-bottom-right"
            size={40}
            color="#FF6666"
          />
        </Card>
        <BlankElement />
        <Card
          title="Ancillaries table"
          navigation={navigation}
          to="Anciliary"
          params={route.params}>
          <MatIcon name="format-columns" size={40} color="#FF6666" />
        </Card>
      </View>
    </View>
  );
};

const BlankElement = () => {
  return <View style={styles.blank} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  blank: {
    width: 16,
  },
  details: {
    paddingBottom: 16,
  },
});
export default SiteCards;
