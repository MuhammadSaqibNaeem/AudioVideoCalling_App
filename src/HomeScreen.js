import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const HomeScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Video Calling</Text>
      <TextInput
        value={userName}
        onChangeText={value => setUserName(value)}
        style={styles.textInputStyle}
      />
      <Button
        title="Video Call"
        onPress={() => navigation.navigate('VideoCalling', {userName})}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
  },
  textInputStyle: {
    width: '90%',
    height: '5%',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 20,
  },
});
