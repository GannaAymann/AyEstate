import React from 'react'

export const Text = ({ color = '#3860E2' }: { color?: string }) => {
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
                d="M32.667 21.167v4.583c0 4.583-1.834 6.417-6.417 6.417h-5.5c-4.583 0-6.416-1.834-6.416-6.417v-5.5c0-4.583 1.833-6.417 6.416-6.417h4.584"
            ></path>
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M32.667 21.167H29c-2.75 0-3.666-.917-3.666-3.667v-3.667zM18.917 23.917h5.5M18.917 27.583h3.666"
            ></path>
        </svg>
    )
}
