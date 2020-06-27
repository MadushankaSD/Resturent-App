import React from 'react';
import {StyleSheet, View, Text, FlatList,TouchableOpacity} from 'react-native';
import ResultsDetail from "./ResultsDetails";
import {withNavigation} from "react-navigation";

const ResultsList = ({title, results, navigation}) => {
if(!results.length){
    return null;
}

    return (
        <View>
            <Text style={style.styleText}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(results)=>{results.id}}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate('Detail',{id:item.id})}>
                        <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    )
                }
                }
            />
        </View>
    );
}

const style = StyleSheet.create({
    styleText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5
    }
});

export default withNavigation(ResultsList);