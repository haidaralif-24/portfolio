import adapter from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		adapter: adapter({
			// Let the adapter inherit the Node version from the
			// Vercel project's "Settings → General → Node.js Version".
			// Forcing nodejs22.x here causes FUNCTION_INVOCATION_FAILED
			// when the project is pinned to Node 20.
		}),
		paths: {
			base: ''
		}
	}
};

export default config;
