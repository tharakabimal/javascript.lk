import React from 'react';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';
import PostPreview from '../components/post-preview';
import layoutStyles from '../styles/layout.module.css';

type Props = {
    allPosts: Post[];
};

const Home = ({ allPosts }: Props) => (
    <div className={layoutStyles.content}>
        <main className="flex flex-col items-center w-full flex-1 xpx-20 py-10 text-center mt-2">
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
