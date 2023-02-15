import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { getNewsAPI, getSourceAPI } from "./api";
export const NewsContext = createContext();

export const Context = ({ children }) => {

    const [news, setNews] = useState();
    const [category, setCategory] = useState('general');
    const [source, setSource] = useState();
    const [index, setIndex] = useState(1);
    

    const fetchNews = async (reset=category) => {
        try {
            const { data } = await axios.get(getNewsAPI(reset));
            setNews(data);
            setIndex(1);
        }
        catch (error) {
            console.log(error);
        }
    }

    const fetchNewsFromSource = async () => {
        try {
            const { data } = await axios.get(getSourceAPI(source));
            setNews(data);
            setIndex(1);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchNews();
    }, [category])

    useEffect(() => {
        fetchNewsFromSource();
    }, [source])

    return (
        <NewsContext.Provider value={{ index, news, setIndex, fetchNews, category, setCategory, setSource}}>
            {children}
        </NewsContext.Provider>
    )
}