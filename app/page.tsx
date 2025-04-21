// app/page.tsx
'use client';

import dynamic from 'next/dynamic';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Dynamically import ChatPage to avoid issues with useState in Server Component
const ChatPage = dynamic(() => import('./cat'), { ssr: false });

export default function Home() {
  return (

      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <ChatPage />
      </main>
  );
}
