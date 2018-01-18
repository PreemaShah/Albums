import React from 'react';
import {Text,View,AppRegistry} from 'react-native';
import Header from './Components/sources/Header';
import AlbumList from './Components/sources/AlbumList'
const App = ()=>{

    return(
        <View>
            <Header headerText={'Albums'}></Header>
            <AlbumList/>
        </View>
    );

};

AppRegistry.registerComponent('Albums',()=>App);