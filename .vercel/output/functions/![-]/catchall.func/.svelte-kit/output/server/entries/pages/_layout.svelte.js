import { a as head } from "../../chunks/server.js";
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	let { children } = $$props;
	head("12qhfyh", $$renderer, ($$renderer) => {
		$$renderer.push(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.31.0/dist/tabler-icons.min.css" class="svelte-12qhfyh"/> <link rel="preconnect" href="https://fonts.googleapis.com" class="svelte-12qhfyh"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" class="svelte-12qhfyh"/> <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&amp;family=Inter:wght@400;500&amp;display=swap" rel="stylesheet" class="svelte-12qhfyh"/>`);
	});
	children($$renderer);
	$$renderer.push(`<!---->`);
}
//#endregion
export { _layout as default };
