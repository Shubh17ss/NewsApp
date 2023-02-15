import { View, Text, useWindowDimensions } from 'react-native'
import React, { useState, useContext } from 'react'
import { TabView, SceneMap } from 'react-native-tab-view'
import { Discover } from '../Screens/Discover'
import { News } from '../Screens/News'
import { TopNavbar } from './TopNavbar'
import { NewsContext } from '../API/Context'

export const Header = () => {

    const {index,setIndex}=useContext(NewsContext);

    const [routes] = useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },

    ]);
    const layout = useWindowDimensions();



    const renderScene = SceneMap({
        first: Discover,
        second: News,

    })

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={() => <TopNavbar index={index} setIndex={setIndex} />}
        />
    )
}

