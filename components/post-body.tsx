/* eslint-disable react/no-danger */
import React from 'react';
import markdownStyles from '../styles/markdown-styles.module.css';

type Props = {
    content: string;
};

const PostBody = ({ content }: Props) => (
    <div className="max-w-2xl mx-auto font-light">
        <div className={markdownStyles.markdown} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
);

export default PostBody;
