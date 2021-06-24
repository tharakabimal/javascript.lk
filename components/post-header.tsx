import React from 'react';
import Avatar from './avatar';
import DateFormatter from './date-formatter';
import PostTitle from './post-title';
import Author from '../types/author';

type Props = {
    title: string;
    date: string;
    author: Author;
};

const PostHeader = ({ author, date, title }: Props) => (
    <div className="max-w-2xl mx-auto">
        <PostTitle>{title}</PostTitle>
        <div className="hidden md:flex md:items-center md:text-xs">
            <Avatar name={author.name} picture={author.picture} /> &nbsp;•&nbsp;
            <DateFormatter dateString={date} />
        </div>
        <div className="max-w-2xl mx-auto">
            <div className="block md:hidden mb-6">
                <Avatar name={author.name} picture={author.picture} />
            </div>
        </div>
    </div>
);

export default PostHeader;
