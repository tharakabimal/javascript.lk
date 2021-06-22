import React from 'react';

type Props = {
    name: string;
    picture: string;
};

const Avatar = ({ name, picture }: Props) => (
    <div className="flex items-center mb-2">
        <img src={picture} className="w-5 h-5 rounded-full mr-2" alt={name} />
        <div className="text-xs text-gray-700">{name}</div>
    </div>
);

export default Avatar;
