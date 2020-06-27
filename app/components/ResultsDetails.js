import React from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';

const ResultsDetail = ({result}) => {

    return (
        <View style={style.container}>
            <Image style={style.image} source={{uri: result.image_url}}/>
            <Text style={style.textStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Review</Text>
        </View>
    );
}

var style = StyleSheet.create({
    container:{
      marginBottom:10,
      marginLeft:10
    },
    textStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 5
    },
    image: {
        width: 250,
        borderRadius:4,
        height:120

    }
});

export default ResultsDetail;