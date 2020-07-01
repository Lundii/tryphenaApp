import React, {useState} from 'react';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import BodyText from '../text/bodytext';

const ListCard = ({sn, title, description, handlePress, children}) => {
  const [icon, setIcon] = useState('keyboard-arrow-right');
  const _handlePress = () => {
    if (handlePress) {
      return handlePress();
    }
    if (icon === 'keyboard-arrow-right') {
      setIcon('keyboard-arrow-down');
    } else {
      setIcon('keyboard-arrow-right');
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={_handlePress} activeOpacity={0.5}>
        <View style={styles.wrapper}>
          {sn && (
            <View style={styles.SN}>
              <BodyText style={styles.text}>{sn}</BodyText>
            </View>
          )}
          <View>
            <BodyText style={styles.title}>{title}</BodyText>
            {description && (
              <BodyText style={styles.description}>{description}</BodyText>
            )}
          </View>
          {children && (
            <MatIcon
              style={{marginLeft: 'auto'}}
              name={icon}
              size={30}
              color="#000"
            />
          )}
        </View>
      </TouchableOpacity>
      {icon === 'keyboard-arrow-down' && children}
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  SN: {
    borderRadius: 50,
    backgroundColor: '#595858',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  text: {
    color: 'white',
  },
  title: {
    fontSize: 16,
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#4d4c4c25',
  },
});

export default ListCard;
