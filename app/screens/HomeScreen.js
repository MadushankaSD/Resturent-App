import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Text, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResCollection from "../hooks/useResCollection";
import ResultsList from "../components/ResultsList";


const HomeScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results] = useResCollection();

    const filterResultsByPrice = (price) => {
        //price= 1||2||3||4
        return results.filter(results => {
            return results.restaurant.price_range === price;
        })

    }

    return (
        <SafeAreaView>
            <SearchBar state={term}
                       onChangeTerm={(newTerm) => setTerm(newTerm)}
                       submit={() => searchApi()}
            />
            <Text>We have {results.length} results</Text>
            <ScrollView>
                <ResultsList results={filterResultsByPrice(1)} title={'Cost Effective'}/>
                <ResultsList results={filterResultsByPrice(2)} title={'Bit Pricier'}/>
                <ResultsList results={filterResultsByPrice(3)} title={'Big Spender'}/>
                <ResultsList results={filterResultsByPrice(4)} title={'Super Resturent'}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({});


export default HomeScreen;