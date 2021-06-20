import React from 'react';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import PostType from '../../types/post';
import PostHeader from '../../components/post-header';
import PostBody from '../../components/post-body';

type Props = {
    post: PostType;
    // morePosts: PostType[];
    // preview?: boolean;
};

const Post = ({ post }: Props) => (
    <article className="mb-32">
        <PostHeader title={post.title} date={post.date} author={post.author} />
        <PostBody content={post.content} />
    </article>
);

export default Post;

type Params = {
    params: {
        slug: string;
    };
};

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage']);
    const content = await markdownToHtml(post.content || '');

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug']);

    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.slug,
            },
        })),
        fallback: false,
    };
}
