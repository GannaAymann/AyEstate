import type { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: "About us ",
    description: "At AyEstate, we are dedicated to helping you find the perfect property that fits your unique lifestyle. With years of experience in the real estate industry, our team offers expert guidance, personalized service, and a commitment to making your property search effortless. Whether you're a first-time buyer or looking to invest, we provide innovative solutions and exclusive listings that set us apart from the competition. Trust AyEstate to guide you home with confidence and ease"
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