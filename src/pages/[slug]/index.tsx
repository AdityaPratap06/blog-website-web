import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { useRouter } from 'next/router';
import { Blog } from '../../Common/Blog';

export default function Page() {
    const { query } = useRouter()

    return (
        <MainLayout>
            <Blog link={query.slug} />
        </MainLayout>
    )
}