import React from 'react';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';
import PostPreview from '../components/post-preview';

type Props = {
    allPosts: Post[];
};

const Home = ({ allPosts }: Props) => (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            {allPosts.map((post) => (
                <PostPreview
                    key={post.title}
                    title={post.title}
                    date={post.date}
                    author={post.author}
                    slug={post.slug}
                    excerpt={post.excerpt}
                />
            ))}
        </main>
    </div>
);

export default Home;

export const getStaticProps = () => {
    const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'excerpt']);

    return {
        props: { allPosts },
    };
};
