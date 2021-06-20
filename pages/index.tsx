import React from 'react';
import { getAllPosts } from '../lib/api';
import HeroPost from '../components/hero-post';
import Post from '../types/post';

type Props = {
    allPosts: Post[];
};

const Home = ({ allPosts }: Props) => {
    const heroPost = allPosts[0];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <HeroPost
                    title={heroPost.title}
                    coverImage={heroPost.coverImage}
                    date={heroPost.date}
                    author={heroPost.author}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                />
            </main>
        </div>
    );
};

export default Home;

export const getStaticProps = () => {
    const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

    return {
        props: { allPosts },
    };
};
