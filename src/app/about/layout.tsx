import type { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: "About us ",
    description: "At AyEstate, we are dedicated to helping you find the ideal property for your lifestyle. With years of experience, our team offers expert guidance, personalized service, and innovative solutions. Whether you're a first-time buyer or an investor, we provide exclusive listings that set us apart. Trust AyEstate to make your property search effortless and guide you home with confidence"
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
        </div>
    )
}