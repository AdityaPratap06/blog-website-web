import { MainLayout } from '@/layouts/MainLayout';
import fs from 'fs';
import path from 'path';
import { FC } from 'react';

const Page: FC<{ privacyPolicyHTML: string }> = ({ privacyPolicyHTML }) => {
    return (
        <MainLayout>
            <div dangerouslySetInnerHTML={{ __html: privacyPolicyHTML }} />
        </MainLayout>
    );
};

export const getStaticProps = async () => {
    const filePath = path.join(process.cwd(), 'src', 'Component', 'PrivacyPolicy.html');
    const privacyPolicyHTML = fs.readFileSync(filePath, 'utf-8');

    return {
        props: {
            privacyPolicyHTML,
        },
    };
};

export default Page;
