import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { useResultContext } from "../contexts/ResultContextProvider";
import { Links } from "./Links";

export const Search = () => {
    const [text, setText] = useState("Elon Musk");
    const { setSearchTerm } = useResultContext();
    const [debouncedValue] = useDebounce(text, 300);

    useEffect(() => {
        if (debouncedValue) setSearchTerm(debouncedValue);
    }, [debouncedValue]);

    return (
        <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
            <input
                type="text"
                value={text}
                className="block p-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."
                onChange={(e) => setText(e.target.value)}
            />
            <Links />
        </div>
    );
};
