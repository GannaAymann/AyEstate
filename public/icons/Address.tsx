import React from "react";

function Address({ width = 76, height = 76, color = "#111" }: { width?: number, height?: number, color?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 76 76"
        >
            <circle cx="38" cy="38" r="38" fill="#F9F9F9"></circle>
            <path
                stroke={color}
                strokeWidth="2"
                d="M38 39.55a3.38 3.38 0 100-6.76 3.38 3.38 0 000 6.76z"
            ></path>
            <path
                stroke={color}
                strokeWidth="2"
                d="M28.922 34.197c2.134-9.381 16.033-9.37 18.156.011 1.246 5.504-2.177 10.162-5.178 13.044a5.626 5.626 0 01-7.81 0c-2.99-2.882-6.414-7.551-5.168-13.055z"
            ></path>
        </svg>
    );
}

export default Address;