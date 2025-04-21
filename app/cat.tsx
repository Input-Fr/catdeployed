import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function ChatPage() {
    const [input, setInput] = useState('');
    type CatMsg  = {
        role: string;
        content: string;
    }
    const [messages, setMessages] = useState<CatMsg[]>([]);

    const sendMessage = async () => {
        const newMessages = [...messages, { role: 'user', content: input }];

        const res = await fetch('/api/cat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: newMessages }),
        });

        const data = await res.json();
        const assistantReply = data.choices[0].message.content;

        setMessages([...newMessages, { role: 'assistant', content: assistantReply }]);
        setInput('');
    };

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
}