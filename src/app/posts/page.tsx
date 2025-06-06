'use client';

import { useState, useEffect } from "react";

type Post = {
    id: number;
    title: string;
    body: string;

}[]

export default function PostsPage() {

    const [posts, setPosts] = useState<Post>([])

    useEffect(()=>{
        const fecthPosts = async () => {
            const res = await fetch("https://dog.ceo/api/breeds/image/random/posts?_limit=5")
            const data = await res.json();
            setPosts(data)
        }
        fecthPosts();
    }, [])

    return (

        <div className="bg-gray-100 min-h-screen">


            <h1 className="text-3x1 font-bold mb-6 text-center">Ultimos Posts</h1>

            <h1 className="text-3xl font-bold mb-6 text-center" >
                {posts.map((post)=>(
                    <div key={post.id} className="bg-violet-300 p-4 rounded-2xl">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="text-gray-600">{post.body}</p>
                    </div>
                ))}
            </h1>


        </div>
    )
}