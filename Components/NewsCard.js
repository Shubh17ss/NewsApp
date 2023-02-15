import { View, Text, Dimensions, Image, ImageBackground, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export const NewsCard = ({ item}) => {
 
  return (

    <View style={{ width: '100%', height: Dimensions.get('window').height, alignItems: 'center',zIndex:10,backgroundColor:'#171A20' }}>
      <Image source={{ uri: item.urlToImage }}
        style={{ width: '100%', height: 270 }}
      />
      <Text style={{ color: 'white', margin: 7, fontWeight: '600', fontSize: 16 }}>{item.title}</Text>
      <Text style={{ color: 'lightgrey', margin: 9, marginTop: 14, fontSize: 14, lineHeight: 20 }}>{item.description}.{item.content}</Text>
      <Text style={{ color: 'white', alignSelf: 'flex-start', marginTop: 14, marginLeft: 9 }}>Source : {item.author !== null ? item.author : 'unknown'}</Text>
      <ImageBackground
        blurRadius={30}
        style={styles.footer}
        source={{ uri: item.urlToImage }}
      >
        <TouchableOpacity onPress={()=>Linking.openURL(item.url)}>
          <Text style={{ color: 'white', fontWeight: '600', color: '#fff' }}> Learn more</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  footer: {
    position:'absolute',
    top:'80%',
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
