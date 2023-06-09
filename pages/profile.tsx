import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Layout from "../components/Layout";

export default withPageAuthRequired(function Profile({ user }) {
    const { error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        user && (
            <Layout title="Profile">
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <img src={user.picture} alt={user.name} referrerPolicy="no-referrer" />
                </div>
            </Layout>
            )
            );
});