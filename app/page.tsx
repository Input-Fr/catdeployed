// app/page.tsx
'use client';

<<<<<<< HEAD
=======
import { useState } from 'react';
>>>>>>> upstream/main
import dynamic from 'next/dynamic';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

<<<<<<< HEAD
// Dynamically import ChatPage to avoid issues with useState in Server Component
const ChatPage = dynamic(() => import('./cat'), { ssr: false });

export default function Home() {
  return (

      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <ChatPage />
      </main>
=======
const ChatPage = dynamic(() => import('./cat'), { ssr: false });



export default function Home() {
    const [videoSrc, setVideoSrc] = useState("/background.mp4");
    const [poster, setPoster] = useState("/idleResting.png");
/*<video src="/upload.mp4" style={{ display: "none" }} preload="auto" />
          <video src="/generating.mp4" style={{ display: "none" }} preload="auto" />
          <video src="/download.mp4" style={{ display: "none" }} preload="auto" />
          <video src="/background.mp4" style={{ display: "none" }} preload="auto" />*/
  return (
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>

          <img
              src={poster}
              alt="Background"
              style={{
                  position: 'fixed',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: -2,
              }}
          />
          <video id={"backVid"}
          autoPlay
          muted
          playsInline
          poster={poster}
          preload={'auto'}
          key={videoSrc}
          style={{
              position: 'fixed',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -1,
          }}
      >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
          <div
              style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  zIndex: -1,
              }}
          />
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <ChatPage setVideoSrc={setVideoSrc} setPoster={setPoster} />
      </main>
      </div>
>>>>>>> upstream/main
  );
}
