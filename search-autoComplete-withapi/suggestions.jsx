import React from "react";

function Suggestions({ data, handleClick }) {
    return (
        <ul className=" w-full bg-white border border-gray-300 mt-2 rounded-md shadow-lg max-h-60 overflow-y-scroll">
            {data.map((items, index) => (
                <li
                    className="cursor-pointer px-4 py-2 hover:bg-blue-100 "
                    key={index}
                    onClick={handleClick}
                >
                    {items}
                </li>
            ))}
        </ul>
    );
}

export default Suggestions;
