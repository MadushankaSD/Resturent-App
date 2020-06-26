import React from 'react';
import {StyleSheet,View,Text,FlatList} from 'react-native';
import ResultsDetail from "./ResultsDetails";

const ResultsList =({title,results})=> {

    return (
        <View>
            <Text style={style.styleText}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                showsHorizontalScrollIndicator={false}
                //keyExtractor={(results)=>{results.restaurant.id}}
                renderItem={({ item })=>{
                   console.log(item.restaurant.id);
                   return <ResultsDetail result={item.restaurant}/>;
                }}
            />
        </View>
    );
}

const style=StyleSheet.create({
 styleText:{
     fontSize:18,
     fontWeight:'bold'
 }
});

export default ResultsList;