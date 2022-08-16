import React from "react";
import { NavLink } from "react-router-dom";

const links = [
    { url: "/search", text: "🔎 All" },
    { url: "/news", text: "📰 News" },
    { url: "/image", text: "📸 Images" },
    { url: "/video", text: "📺 Videos" },
];

export const Links = () => {
    return (
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {links.map(({ url, text }) => (
                <NavLink
                    to={url}
                    className="m-3 mb-0 text-blue-700 dark:text-blue-300 pb-2"
                >
                    {text}
                </NavLink>
            ))}
        </div>
    );
};
