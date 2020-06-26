import React,{useState,useEffect} from 'react';
import yelp from "../api/yelp";



export default ()=>{
    const [results,setResults]=useState([]);

    const seachApi = async ()=> {
        const response = await yelp.get('/search', {
            params: {

            }
        });
        setResults(response.data.restaurants);
    }

    useEffect(() => {
        seachApi();
    }, [])

    return [seachApi,results];
};


