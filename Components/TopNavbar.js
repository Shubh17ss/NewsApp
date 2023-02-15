import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { NewsContext } from '../API/Context'

export const TopNavbar = ({ index, setIndex }) => {

    const {fetchNews}=useContext(NewsContext);

    return (
        <View style={{ ...styles.container, backgroundColor: '#171A20' }}>
            {index === 0 ?
                <TouchableOpacity style={styles.left}>
                    <Text style={{ ...styles.text, color: 'lightgrey`' }}>
                        <MaterialCommunityIcons
                            name='theme-light-dark'
                            size={18}
                            color='#007fff'
                        />
                    </Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.left} onPress={() => setIndex(index === 0 ? 1 : 0)}>
                    <SimpleLineIcons
                        name='arrow-left'
                        size={18}
                        color='#007fff'
                    />
                    <Text style={{ ...styles.text, color: 'lightgrey' }}>Discover</Text>
                </TouchableOpacity>
            }

            <Text style={{ ...styles.center, color: 'white' }}>
                {index ? 'All News' : 'Discover'}
            </Text>
            {index ? (
                <TouchableOpacity style={styles.right} onPress={()=>{fetchNews('general')}}>
                    <Text style={styles.text}>
                        <AntDesign name='reload1' size={18} color='#007fff' />
                    </Text>
                </TouchableOpacity>
            ) :
                (
                    <TouchableOpacity style={styles.left} onPress={()=>setIndex(index===0?1:0)}>
                        <Text style={{...styles.text,color:'lightgrey'}}>All news</Text>
                        <SimpleLineIcons name='arrow-right' size={18} color='#007fff'/>
                    </TouchableOpacity>
                )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomColor: 'white',
        borderBottomWidth: 0.5
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 80,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 14
    },
    right:{
        width:80,
        alignItems:'flex-end',
    },
    center:{
        paddingBottom:6,
        borderBottomColor:'#007fff',
        borderBottomWidth:3,
        borderRadius:10,
        fontSize:16,
        fontWeight:'500'
    }
})