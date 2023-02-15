import { Platform, StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { Header } from './Components/Header';
import { Context } from './API/Context';

const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 0;


export default function App() {

  return (
    <Context>
      <SafeAreaView style={{ ...styles.container, backgroundColor: '#171A20' }}>
        <Header />
      </SafeAreaView>
    </Context>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: paddingTop,
  },
});
