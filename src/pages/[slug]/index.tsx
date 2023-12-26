import React from 'react';
import { useRouter } from 'next/router';
import { MainLayout } from '@/layouts/MainLayout';
import { Blog } from '@/Component/Blog';

export default function Page() {
    const { query } = useRouter()

    return (
        <MainLayout>
            <Blog link={query.slug} />
        </MainLayout>
    )
}