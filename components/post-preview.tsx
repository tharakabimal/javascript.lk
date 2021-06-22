import React from 'react';
import Link from 'next/link';
import Avatar from './avatar';
import DateFormatter from './date-formatter';
import Author from '../types/author';

type Props = {
    title: string;
    date: string;
    excerpt: string;
    author: Author;
    slug: string;
};

const PostPreview = ({ author, date, excerpt, slug, title }: Props) => (
    <div className="mt-10 first:mt-0">
        <Avatar name={author.name} picture={author.picture} />
        <h3 className="text-xl font-semibold mb-3 leading-snug text-left">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>{title}</a>
            </Link>
        </h3>
        <p className="leading-relaxed mb-4 text-left font-light">{excerpt}</p>
        <div className="text-left text-gray-500 text-xs mb-4">
            <DateFormatter dateString={date} />
        </div>
    </div>
);

export default PostPreview;
