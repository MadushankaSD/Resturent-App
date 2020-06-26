import React from 'react';
import {StyleSheet,View,TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons'

const SearchBar =({state,onChangeTerm,submit})=> {

    return (
        <View style={style.searchBar}>
            <Feather
                style={style.icon}
                name={'search'} size={30}/>
            <TextInput
                autoCapitalize={"none"}
                autoCorrect={false}
                style={style.textInput}
                placeholder={"search"}
                value={state}
                onChangeText={(newTerm)=>onChangeTerm(newTerm)}
                onEndEditing={()=>submit()}
            />
        </View>
    );
}

const style=StyleSheet.create({

    searchBar:{
        marginTop:10,
        backgroundColor:'#F0EEEE',
        marginHorizontal:10,
        height:40,
        borderRadius:10,
        flexDirection:'row',
    },
    textInput:{
        flex:1,
        fontSize:18,
        marginLeft:5
    },
    icon:{
        alignSelf:'center',
        marginHorizontal: 5
    }
});

export default SearchBar;