import React from 'react';
import { Blog } from '../../Common/Blog';
import { MainLayout } from '../../layouts/MainLayout';

export default function Page() {
    return (
        <MainLayout>
            <Blog />
        </MainLayout>
    )
}