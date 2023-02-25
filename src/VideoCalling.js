// App.js
import React from 'react';
import ZegoUIKitPrebuiltCall, {
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import {AppID, AppSign} from './config';
import {StyleSheet, View} from 'react-native';
export default function VoiceCallPage({route, navigation}) {
  const {userName} = route.params;
  console.log(userName);
  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltCall
        appID={106817178}
        appSign="30c333e362fdaf5acd7370c30f2b4d8b89a111bf3c4227ace165ed120a338344"
        userID={userName} // userID can be something like a phone number or the user id on your own user system.
        userName={userName}
        callID={'myCallId'} // callID can be any unique string.
        config={{
          // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onOnlySelfInRoom: () => {
            navigation.navigate('HomeScreen');
          },
          onHangUp: () => {
            navigation.navigate('HomeScreen');
          },
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
