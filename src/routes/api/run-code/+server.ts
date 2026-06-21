import { API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    const { compiler, code, input } = await request.json();

    const res = await fetch('https://api.onlinecompiler.io/api/run-code-sync/', {
        method: 'POST',
        headers: {
            'Authorization': API_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ compiler, code, input: input || '' }),
    });

    const data = await res.json();
    return json(data);
}
