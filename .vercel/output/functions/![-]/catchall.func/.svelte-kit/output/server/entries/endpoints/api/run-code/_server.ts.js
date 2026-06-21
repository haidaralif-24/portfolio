import { t as private_env } from "../../../../chunks/shared-server.js";
import { json } from "@sveltejs/kit";
//#region src/routes/api/run-code/+server.ts
async function POST({ request }) {
	const { compiler, code, input } = await request.json();
	const apiKey = private_env.API_KEY;
	if (!apiKey) return new Response("API_KEY not configured", { status: 500 });
	return json(await (await fetch("https://api.onlinecompiler.io/api/run-code-sync/", {
		method: "POST",
		headers: {
			"Authorization": apiKey,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			compiler,
			code,
			input: input || ""
		})
	})).json());
}
//#endregion
export { POST };
