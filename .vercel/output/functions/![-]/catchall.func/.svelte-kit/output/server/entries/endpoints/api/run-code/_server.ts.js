import { json } from "@sveltejs/kit";
//#region \0virtual:env/static/private
/** @type {import('$env/static/private').API_KEY} */
var API_KEY = "51629850e1ee86408c1d7596be8126d9";
//#endregion
//#region src/routes/api/run-code/+server.ts
async function POST({ request }) {
	const { compiler, code, input } = await request.json();
	return json(await (await fetch("https://api.onlinecompiler.io/api/run-code-sync/", {
		method: "POST",
		headers: {
			"Authorization": API_KEY,
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
