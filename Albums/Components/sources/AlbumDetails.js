import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const albumDetails=({album})=>{
    const {title,artist,thumbnail_image,image,url}=album;
    return(
        <Card>
            <CardItem style={Styles.headerStyle}>
                <View style={Styles.headerStyle}>
                    <Image
                        style={Styles.headerImageStyle}
                        source={{uri:thumbnail_image}}/>
                </View>
                <View style={Styles.headerTextStyle}>
                    <Text style={Styles.textStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardItem>
            <CardItem>
                <Image
                    style={Styles.imageSectionStyle}
                    source={{uri:image}}/>
            </CardItem>
            <CardItem>
                <Button onPress={()=>Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardItem>
        </Card>
    );
};

const Styles={
    headerTextStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headerImageStyle:{
        height:50,
        width:50
    },
    headerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    imageSectionStyle:{
        height:300,
        //width:300
        flex:1,
        width:null
    },
    textStyle:{
        fontSize:20
    }
}
export default albumDetails;