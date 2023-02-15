import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { NewsContext } from '../API/Context';
import { categories, sources } from '../API/api'
import { Search } from '../Components/Search';

export const Discover = () => {

  const { setCategory,setSource } = useContext(NewsContext);



  return (
    <View style={styles.discover}>
      {/* Search */}
      <Search/>
      {/* Categories */}
      <Text style={{ ...styles.subtitle, color: 'white' }}>Categories</Text>
      <FlatList
        data={categories}
        horizontal={true}
        style={styles.flatList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.category} onPress={() => setCategory(item.name)}>
            <Image source={{ uri: item.pic }} style={styles.categoryImage} />
            <Text style={{ ...styles.name, color: 'white' }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* Sources */}
      <Text style={{ ...styles.subtitle, color: 'white' }}>Sources</Text>
      <View style={styles.sources}>
          {sources.map((s)=>(
            <TouchableOpacity 
              onPress={()=>setSource(s.id)}
              key={s.id}
              style={styles.sourceContainer}
            >
            <Image source={{uri:s.pic}} style={styles.sourceImage}></Image>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: '#007fff',
    borderBottomWidth: 5,
    alignSelf: 'flex-start',
    borderRadius: 10,
  },
  categoryImage: {
    width: '100%',
    height: 40,
    resizeMode: 'contain'
  },
  category: {
    height: 80,
    width: 80,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  name: {
    fontSize: 12,
  },
  flatList: {
    height: '20%',
  },
  sources:{
    flexDirection:'row', 
    flexWrap:'wrap',
    justifyContent:'space-around',
    paddingVertical:15,
  },
  sourceContainer:{
    height:120,
    width:'30%',
    borderRadius:10,
    margin:15,
    backgroundColor:'#cc313d'
  },
  sourceImage:{
     height:'100%',
     borderRadius:10,
     resizeMode:'cover',

  }
})
