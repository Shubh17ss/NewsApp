import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../API/Context'
import { Entypo } from '@expo/vector-icons';
import { NewsCard } from '../Components/NewsCard';

export const Search = () => {

    const { news } = useContext(NewsContext);
    const articles = news != null ? news.articles : [];

    const [searchResults, setSearchResults] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentNews, setCurrentNews] = useState();

    const handleModal = (n) => {
        setModalVisible(true);
        setCurrentNews(n);
    }

    const handleSearch = (text) => {
        if (!text) {
            setSearchResults([]);
        }
        else {
            setSearchResults(articles.filter((query) => query.title.includes(text)))
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={{ ...styles.search, backgroundColor: '#000', color: '#fff' }}
                onChangeText={(text) => handleSearch(text)}
                placeholder='Search for news'
                placeholderTextColor={'white'}
            />

            <View style={styles.searchResults}>
                {searchResults.slice(0, 10).map((n) => (
                    <TouchableOpacity
                        key={n.title}
                        activeOpacity={0.7}
                        onPress={() => handleModal(n)}
                    >
                        <Text style={{ ...styles.singleResult, backgroundColor: 'black', color: 'white' }}>
                            {n.title}
                        </Text>

                    </TouchableOpacity>
                ))}
            </View>

            <Modal animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={{ position: 'absolute', zIndex: 11, right: 0, margin: 20 }}
                >
                    <Entypo name='circle-with-cross' size={30} color='white' />
                </TouchableOpacity>
                <View style={{ height: '100%',paddingTop:'15%',backgroundColor:'#171A20' }}>
                    <NewsCard item={currentNews} />
                </View>

            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        position: 'relative',
        height: 35,
        margin: 10,
        marginBottom: 20,
    },
    search: {
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 12,
    },
    searchResults: {
        position: 'absolute',
        zIndex: 1,
        top: 50,
    },
    singleResult: {
        borderRadius: 5,
        padding: 10,

        shadowColor: 'black',
        elevation: 5,
    },
    modal:{
        marginTop:10,
    }

})
