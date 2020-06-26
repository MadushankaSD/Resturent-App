import React from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';

const ResultsDetail = ({result}) => {

    return (
        <View>
            <Image style={style.image} source={{uri: result.photos_url}}/>
            <Text style={style.textStyle}>{result.name}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    image: {
        width: 250,
        borderRadius:4,
        height:120
    }
});

export default ResultsDetail;