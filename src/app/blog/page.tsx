import React from 'react'
import { OurBlog } from '../components/blog/OurBlog'
import { PopularArticles } from '../components/blog/PopularArticles'
import { RecentArticles } from '../components/blog/RecentArticles'
export default function page() {
    return (
        <div>
            <OurBlog />
            <PopularArticles />
            <RecentArticles />
        </div>
    )
}