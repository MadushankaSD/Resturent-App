import React,{useState,useEffect} from 'react';
import {StyleSheet, SafeAreaView, Text,FlatList,Image} from 'react-native';
import yelp from "../api/yelp";



const DetailScreen = ({navigation}) => {
    let param = navigation.getParam('id');

    const [result,setState]=useState(null);

    const getResturent= async (id)=>{
        let resturent = await yelp.get(`/${id}`);
        setState(resturent.data);
    }

    useEffect(()=>{
        getResturent(param);
    },[]);

    if(!result){
        return null;
    }

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.text}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{
                 return  <Image style={style.image} source={{uri:item}} />
                }
                }
            />

        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container:{

    },
    image:{
        height:200,
        width:300,
        alignSelf: 'center',
        marginBottom:5,
        borderRadius:10
    },
    text:{
        fontSize:20,
        alignSelf:'center',
        marginVertical:5,
        fontWeight:'bold'

    }

});


export default DetailScreen;