import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const getResults = async (type) => {
        setIsLoading(true);
        const response = await fetch(`${baseUrl}${type}`, {
            method: "GET",
            headers: {
                "X-User-Agent": "desktop",
                "X-Proxy-Location": "US",
                "X-RapidAPI-Key":
                    "9503f3d1a8msh86ffe7a3c1bb583p1a8144jsn5bd17ccadf29",
                "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
            },
        });

        const data = await response.json();
        console.log(data);
        setResults(data);
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
