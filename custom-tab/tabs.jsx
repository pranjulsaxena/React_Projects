import React, { useState } from "react";

function Tabs({ tabContent, onChange }) {
    const [currenTabIndex, setcurrenTabIndex] = useState(0);

    const handleClick = (getCurrenTabIndex) => {
        setcurrenTabIndex(getCurrenTabIndex);
        onchange(getCurrenTabIndex);
    };
    return (
        <div className="w-full h-full flex flex-col gap-7 items-center justify-center ">
            <div className="flex gap-x-2 bg-yellow-500 px-2 py-2">
                {tabContent.map((tabItem, index) => (
                    <div
                        className={`px-2 py-4  ${index===currenTabIndex ? "bg-purple-700" :"bg-blue-800"} cursor-pointer font-bold text-center text-3xl text-white`}
                        key={tabItem.label}
                        onClick={() => {
                            handleClick(index);
                        }}>
                        <span>{tabItem.label}</span>
                    </div>
                ))}
            </div>
            {tabContent[currenTabIndex] && tabContent[currenTabIndex].content ? (
                <div>{tabContent[currenTabIndex].content}</div>
            ) : null}
        </div>
    );
}

export default Tabs;
