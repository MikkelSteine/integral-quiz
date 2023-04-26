import React from 'react'
import Link from 'next/link'
import {useUser} from '@auth0/nextjs-auth0/client'

const Header = (): React.ReactElement => {
    const {user} = useUser();

    return (
        <header>
            <nav>
                <Link href="/">Home</Link>|
                {user ? (
                    <>
                        <Link href="/profile">Profile</Link> |
                        <Link href="/api/auth/logout">Logout</Link> |
                    </>
                ) : (
                    <Link href="/api/auth/login">Login</Link>
                )}
            </nav>
        </header>
    );
}

export default Header;