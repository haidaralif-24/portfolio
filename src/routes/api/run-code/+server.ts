import { env } from '$env/dynamic/private';
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
    const apiKey = env.API_KEY;
    if (!apiKey) {
        throw error(500, 'API_KEY environment variable is not configured on the server.');
    }

    let compiler: string;
    let code: string;
    let input: string;
    try {
        const body = await request.json();
        compiler = body?.compiler;
        code = body?.code;
        input = body?.input ?? '';
    } catch {
        throw error(400, 'Invalid JSON body.');
    }
    if (!compiler || typeof code !== 'string') {
        throw error(400, 'Missing required fields: compiler, code.');
    }

    let upstream: Response;
    try {
        upstream = await fetch('https://api.onlinecompiler.io/api/run-code-sync/', {
            method: 'POST',
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ compiler, code, input })
        });
    } catch (err) {
        console.error('[run-code] upstream fetch failed:', err);
        throw error(502, 'Failed to reach the upstream compiler service.');
    }

    const contentType = upstream.headers.get('content-type') ?? '';
    if (!contentType.includes('application/json')) {
        const text = await upstream.text();
        console.error('[run-code] upstream returned non-JSON:', upstream.status, text.slice(0, 200));
        throw error(502, `Upstream returned non-JSON response (status ${upstream.status}).`);
    }

    const data = await upstream.json();
    return json(data, { status: upstream.status });
};
