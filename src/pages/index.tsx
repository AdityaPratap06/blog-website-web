import React from 'react';
import { AllPosts } from '@/Component/Post/AllPosts';
import { MainLayout } from '@/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <AllPosts />
    </MainLayout>
  )
}
