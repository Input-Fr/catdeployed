// app/api/cat/route.ts
import { Mistral } from '@mistralai/mistralai';
import { NextRequest, NextResponse } from 'next/server';

const client = new Mistral({
    apiKey: process.env.MISTRAL_API_KEY!,
});

export async function POST(req: NextRequest) {
    const { messages } = await req.json()
    let chatResponse;
    try {
        chatResponse = await client.chat.complete({
            model: 'mistral-large-latest',
            messages: messages,
        });
        return NextResponse.json(chatResponse);
    }
    catch (e : unknown) {
        console.error(e);
        return NextResponse.json({error: "error in communication with Mistral API", status: 500});
    }



}
