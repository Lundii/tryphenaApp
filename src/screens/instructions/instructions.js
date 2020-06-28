import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import EnIcon from 'react-native-vector-icons/Entypo';
import ListCard from '../../components/listcard';
import {BodyText} from '../../components/text';

const Instructions = () => {
  return (
    <ScrollView>
      <ListCard title="LOADINGS">
        <BodyText style={styles.text}>
          For each load, please indicate the{' '}
        </BodyText>
        <BodyText style={styles.text}>
          Leg(e.g A,B etc.), Height(e.g 25m section 22 etc.), Name(e.g Katherein
          dual band, Huawei MW, Ericsson RRU etc.), Type(e.g Dual Band, Single
          Band, RRU, MW, panel etc.), Dimension(for RF 220x100x20mm,for MW
          0.6,0.3 etc.) This can be done in any order convenient
        </BodyText>
      </ListCard>
      <ListCard title="PICTURES REQUIRED">
        <BodyText style={styles.text}>
          In order to fulfil the purpose of this audit please ensure you snap
          sufficient pictures of the following but not limited to;
        </BodyText>
        <View style={styles.row}>
          <EnIcon
            style={{alignSelf: 'flex-start'}}
            name="dot-single"
            size={30}
            color="#000"
          />
          <BodyText style={styles.text}>Site entrance (with site ID)</BodyText>
        </View>
        <View style={styles.row}>
          <EnIcon
            style={{alignSelf: 'flex-start'}}
            name="dot-single"
            size={30}
            color="#000"
          />
          <BodyText style={styles.text}>
            Full tower from different sides and from inside tower to view hip
            bracings
          </BodyText>
        </View>
        <View style={styles.row}>
          <EnIcon
            style={{alignSelf: 'flex-start'}}
            name="dot-single"
            size={30}
            color="#000"
          />
          <BodyText style={styles.text}>
            Each leg bottom (stub) inside and outside showing the HDB and
            connection between bolts the stub and first leg.
          </BodyText>
        </View>
        <View style={styles.row}>
          <EnIcon
            style={{alignSelf: 'flex-start'}}
            name="dot-single"
            size={30}
            color="#000"
          />
          <BodyText style={styles.text}>Tower spines and faces</BodyText>
        </View>
        <View style={styles.row}>
          <EnIcon
            style={{alignSelf: 'flex-start'}}
            name="dot-single"
            size={30}
            color="#000"
          />
          <BodyText style={styles.text}>
            Pictures of ALL the loads individually.
          </BodyText>
        </View>
        <View style={styles.row}>
          <EnIcon
            style={{alignSelf: 'flex-start'}}
            name="dot-single"
            size={30}
            color="#000"
          />
          <BodyText style={styles.text}>
            Applicable pictures for all readings.
          </BodyText>
        </View>
        <View style={styles.row}>
          <EnIcon
            style={{alignSelf: 'flex-start'}}
            name="dot-single"
            size={30}
            color="#000"
          />
          <BodyText style={styles.text}>Site environment.</BodyText>
        </View>
        <View style={styles.row}>
          <EnIcon
            style={{alignSelf: 'flex-start'}}
            name="dot-single"
            size={30}
            color="#000"
          />
          <BodyText style={styles.text}>
            Check tower torque situation in ground section on different legs and
            snap pictures with the torque wrench attached to the bolt on the leg
            while checking. (VERY IMPORTANT)
          </BodyText>
        </View>
      </ListCard>
      <ListCard title="COMPLETE TOWER DRAWING">
        <View style={styles.row}>
          <EnIcon
            style={{alignSelf: 'flex-start'}}
            name="dot-single"
            size={30}
            color="#000"
          />
          <BodyText style={styles.text}>
            Sketch complete tower and specify dimension for EVERY member(leg(L),
            horizontal(H), diagonal(D), horizontal sub-brace(HB), Diagonal sub
            brace(DB), Horizontal Hip bracing inside tower(HHB), Diagonal Hip
            bracing inside tower(DHB))
          </BodyText>
        </View>
        <View style={styles.row}>
          <EnIcon
            style={{alignSelf: 'flex-start'}}
            name="dot-single"
            size={30}
            color="#000"
          />
          <BodyText style={styles.text}>
            Indicate section/height where hip bracing start and stop and
            dimensions as they change.
          </BodyText>
        </View>
        <View style={styles.row}>
          <EnIcon
            style={{alignSelf: 'flex-start'}}
            name="dot-single"
            size={30}
            color="#000"
          />
          <BodyText style={styles.text}>
            Sketch of site layout showing position of equipment and tower (just
            labelled rectangles with total site size shown)
          </BodyText>
        </View>
      </ListCard>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 8,
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'white',
    fontFamily: 'Montserrat-Regular',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
});

export default Instructions;

const DATA = [
  {
    title: 1,
    data: [],
  },
  {
    sn: 2,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
  {
    sn: 3,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
  {
    sn: 4,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
  {
    sn: 5,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
  {
    sn: 6,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
  {
    sn: 7,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
  {
    sn: 8,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
  {
    sn: 9,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
  {
    sn: 10,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
];
