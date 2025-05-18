import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

<<<<<<< HEAD
export default function ChatPage() {
=======
type Props = {
    setVideoSrc: (src: string) => void;
    setPoster: (poster: string) => void;
}

export default function ChatPage({ setVideoSrc, setPoster}: Props) {
>>>>>>> upstream/main
    const [input, setInput] = useState('');
    type CatMsg  = {
        role: string;
        content: string;
    }
    const [messages, setMessages] = useState<CatMsg[]>([]);

<<<<<<< HEAD
    const sendMessage = async () => {
        const newMessages = [...messages, { role: 'user', content: input }];
=======
    const preloadVideo = (src: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            const video = document.createElement('video');
            video.src = src;
            video.preload = 'auto';
            video.muted = true;
            video.playsInline = true;
            video.style.display = 'none';

            const cleanup = () => {
                video.remove();
            };

            video.addEventListener('canplaythrough', () => {
                cleanup();
                resolve();
            });

            video.addEventListener('error', (err) => {
                cleanup();
                reject(err);
            });

            document.body.appendChild(video);
        });
    };

    const sendMessage = async () => {
        await preloadVideo("/generating.mp4");
        await preloadVideo("/downSped.mp4");
        const newMessages = [...messages, { role: 'user', content: input }];
        setVideoSrc("/upSped.mp4");


        await new Promise<void>(async (resolve) => setTimeout(() => {
            resolve();
        }, 1000));
        setPoster("/idleLoading.png");
        await new Promise<void>(async (resolve) => setTimeout(() => {
            resolve();
        }, 250));
        setVideoSrc("/generating.mp4");
>>>>>>> upstream/main

        const res = await fetch('/api/cat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: newMessages }),
        });
<<<<<<< HEAD

        const data = await res.json();
        const assistantReply = data.choices[0].message.content;

        setMessages([...newMessages, { role: 'assistant', content: assistantReply }]);
        setInput('');
    };

=======
        await new Promise<void>(async resolve => setTimeout(resolve, 1000));
        setVideoSrc("/downSped.mp4");
        await new Promise<void>(async resolve => setTimeout(resolve, 2000));
        setPoster("/idleResting.png");

        const data = await res.json();
        const assistantReply = data.choices[0].message.content;
        setMessages([...newMessages, { role: 'assistant', content: assistantReply }]);
        setInput('');
        setVideoSrc("/background.mp4");

    };


>>>>>>> upstream/main
    return (
        <div>
            <h1>CAT</h1>
            {messages.map((msg, i) => (
                <div key={i}><b>{msg.role}:</b> <ReactMarkdown>{msg.content}</ReactMarkdown></div>
            ))}
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Entrez votre message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
<<<<<<< HEAD
}
=======
}
>>>>>>> upstream/main
