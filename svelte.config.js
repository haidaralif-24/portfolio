import adapter from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		adapter: adapter({
			// runtime is inherited from the Vercel project's
			// Settings → General → Node.js Version
		}),
		paths: {
			base: ''
		}
	}
};

export default config;
