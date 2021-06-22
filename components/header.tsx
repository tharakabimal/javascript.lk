/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

const Header = () => (
    <div className="h-28 flex justify-center items-center">
        <Link href="/">
            <a className="text-6xl font-bold tracking-tighter leading-tight">JavaScript.lk</a>
        </Link>
    </div>
);

export default Header;
