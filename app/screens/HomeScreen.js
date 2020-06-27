import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Text, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResCollection from "../hooks/useResCollection";
import ResultsList from "../components/ResultsList";


const HomeScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results] = useResCollection();

    const filterResultsByPrice = (price) => {
        return results.filter(results => {
            return results.price === price;
        })

    }

    return (
        <SafeAreaView>
            <SearchBar state={term}
                       onChangeTerm={(newTerm) => setTerm(newTerm)}
                       submit={()=>searchApi(term)}
            />
            {/*<ScrollView>*/}
                <ResultsList results={filterResultsByPrice("$")} title={'Cost Effective'}/>
                <ResultsList results={filterResultsByPrice("$$")} title={'Bit Pricier'}/>
                <ResultsList results={filterResultsByPrice("$$$")} title={'Big Spender'}/>
            {/*</ScrollView>*/}
        </SafeAreaView>
    );
}

const style = StyleSheet.create({});


export default HomeScreen;