import { useRouter } from 'next/router';
import React from 'react';

const singleBlogPage = () => {
const router = useRouter();
    return (
        <div>
            <h1> this blog no : {router.query.blogId}</h1>
        </div>
    );
};

export default singleBlogPage;