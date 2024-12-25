import React from 'react'

export const Account = ({ color = '#3860E2' }: { color?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            fill="none"
            viewBox="0 0 46 46"
        >
            <circle cx="23" cy="23" r="23" fill="#F9F9F9"></circle>
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M23 23a4.583 4.583 0 1 0 0-9.167A4.583 4.583 0 0 0 23 23M30.874 32.167c0-3.548-3.529-6.417-7.874-6.417s-7.874 2.87-7.874 6.417"
            ></path>
        </svg>
    )
}
