import React from "react";

function Support({ width = 76, height = 76, color = "#111" }: { width?: number, height?: number, color?: string }) {
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
                d="M44.5 45.432h-.823c-.867 0-1.69.335-2.297.942l-1.852 1.831a2.19 2.19 0 01-3.066 0l-1.853-1.83a3.256 3.256 0 00-2.297-.943H31.5c-1.798 0-3.25-1.441-3.25-3.218V30.395c0-1.777 1.452-3.218 3.25-3.218h13c1.798 0 3.25 1.441 3.25 3.218v11.82c0 1.765-1.452 3.217-3.25 3.217z"
            ></path>
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M32.584 34.923c0-1.007.823-1.83 1.83-1.83 1.008 0 1.831.823 1.831 1.83 0 2.037-2.892 2.253-3.531 4.193-.13.4.205.801.628.801h2.903M42.377 39.907V33.72a.628.628 0 00-.455-.607.643.643 0 00-.715.271 189.324 189.324 0 00-2.362 3.943.697.697 0 000 .683c.12.206.347.336.596.336h3.976"
            ></path>
        </svg>
    );
}

export default Support;