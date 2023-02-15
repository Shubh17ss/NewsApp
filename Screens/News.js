import { View, Text, Dimensions, FlatList, Touchable, TouchableOpacity,StyleSheet } from 'react-native'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { NewsContext } from '../API/Context';
import { NewsCard } from '../Components/NewsCard';
import { AntDesign } from '@expo/vector-icons';


export const News = () => {

  const { news } = useContext(NewsContext);
  const [offset, setOffSet]=useState(0);
  const articles = news != null ? news.articles : [];
  const flatListRef = React.useRef();
  const toTop = () => {
    setOffSet(0);
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  }

  return (
    <View style={{ flex: 1 }}>
      {
       offset>0?
      <TouchableOpacity style={styles.toTopIcon} onPress={toTop}>
        <AntDesign
          name='arrowup'
          size={20}
          color='#007FFF'
        />
      </TouchableOpacity>
        :
        <></>
      }

      <FlatList
        ref={flatListRef}
        data={articles}
        onScrollEndDrag={()=>setOffSet(1)}
        renderItem={({ item }) => <NewsCard item={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  )
}

const styles=StyleSheet.create({
  toTopIcon:{
    position:'absolute',
    bottom:80,
    right:10,
    zIndex:50,
  }
})