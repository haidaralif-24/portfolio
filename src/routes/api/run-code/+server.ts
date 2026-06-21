import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    const { compiler, code, input } = await request.json();

    const apiKey = env.API_KEY;

    if (!apiKey) {
        return new Response('API_KEY not configured', { status: 500 });
    }

    const res = await fetch('https://api.onlinecompiler.io/api/run-code-sync/', {
        method: 'POST',
        headers: {
            'Authorization': apiKey,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ compiler, code, input: input || '' }),
    });

    const data = await res.json();
    return json(data);
}
