import React from 'react';
import { useRouter } from 'next/router';
import { MainLayout } from '@/layouts/MainLayout';
import { ContactUs } from '@/Component/ContactUs';

export default function Page() {
    return (
        <MainLayout>
            <ContactUs />
        </MainLayout>
    )
}