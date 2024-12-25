import React from "react";

function Email({ width = 76, height = 76, color = "#111" }: { width?: number, height?: number, color?: string }) {
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M43.417 47.208H32.583c-3.25 0-5.416-1.625-5.416-5.416v-7.584c0-3.791 2.166-5.416 5.416-5.416h10.834c3.25 0 5.416 1.625 5.416 5.416v7.584c0 3.791-2.166 5.416-5.416 5.416z"
            ></path>
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M43.417 34.75l-3.391 2.708c-1.116.889-2.947.889-4.063 0l-3.38-2.708"
            ></path>
        </svg>
    );
}

export default Email;