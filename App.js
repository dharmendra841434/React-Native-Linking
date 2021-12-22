import React from 'react'
import { View, Text, StyleSheet, Linking, StatusBar } from 'react-native';
import CustumBtn from './Componants/CustumBtn';

const righturl = "https://github.com/dharmendra841434?tab=repositories";
const wrongurl = "www.htddbdj/djdh"

const OpenLink = async (Url) => {
  const isSupported = await Linking.canOpenURL(Url);
  if (isSupported) {

    await Linking.openURL(Url);
  } else {
    alert("Url Is Not Supported");
  }

}

const App = () => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle='dark-content' backgroundColor="white" showHideTransition='false' />
      <CustumBtn title="Open Link"
        styles={{ backgroundColor: "#2455bf", }}
        color="#f2bb07"
        onPress={() => { OpenLink(righturl) }}
      />
      <CustumBtn title="Open setting"
        styles={{ backgroundColor: "#144f04", }}
        color="#ff6a0d"
        onPress={() => { Linking.openSettings() }}
      />
      <CustumBtn title="Open Gmail"
        styles={{ backgroundColor: "#48044f", }}
        color="white"
        onPress={() => { Linking.openURL('mailto:To@mail_ID?subject=dhruv&body=my name is') }}
      />
      <CustumBtn title="Open Gallary"
        styles={{ backgroundColor: "#d10f70", }}
        color="#0dfffb"
        onPress={() => { Linking.openURL('content://media/internal/images/media') }}
      />
      <CustumBtn title="Open Whatsapp"
        styles={{ backgroundColor: "#de6502", }}
        color="#3867e8"
        onPress={() => { Linking.openURL('whatsapp://send?7761895776&text=dhruv') }}
      />
      <CustumBtn title="Open Map"
        styles={{ backgroundColor: "#de020a", }}
        color="#67f24b"
        onPress={() => { Linking.openURL('https://www.google.com/maps') }}
      />
      <CustumBtn title="Open Dailpad"
        styles={{ backgroundColor: "#3a05ab", }}
        color="#b5fc3a"
        onPress={() => { Linking.openURL('tel:${7761895776}') }}
      />
      <CustumBtn title="Open Message"
        styles={{ backgroundColor: "#de020a", }}
        color="#67f24b"
        onPress={() => { Linking.openURL("sms:+917761895776?body=Hi This is react native demo") }}
      />
      <CustumBtn title="Open Youtube"
        styles={{ backgroundColor: "#d10f70", }}
        color="#0dfffb"
        onPress={() => { Linking.openURL('https://www.youtube.com/watch?v=yourvideo') }} />
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 50,
    justifyContent: 'space-between',
    flexDirection: 'column'
  }
})


export default App;
