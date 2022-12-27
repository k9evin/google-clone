import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://seo-api.p.rapidapi.com/v1";

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("Google");

    const getResults = async (type) => {
        setIsLoading(true);
        const response = await fetch(`${baseUrl}${type}`, {
            method: "GET",
            headers: {
                "X-User-Agent": "desktop",
                "X-Proxy-Location": "US",
                "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
                "X-RapidAPI-Host": "seo-api.p.rapidapi.com",
            },
        });

        const data = await response.json();

        if (type.includes("/news")) {
            setResults(data.entries);
        } else if (type.includes("/image")) {
            setResults(data.image_results);
        } else {
            setResults(data.results);
        }

        setIsLoading(false);
    };

    return (
        <ResultContext.Provider
            value={{
                getResults,
                results,
                searchTerm,
                setSearchTerm,
                isLoading,
            }}
        >
            {children}
        </ResultContext.Provider>
    );
};

export const useResultContext = () => useContext(ResultContext);
