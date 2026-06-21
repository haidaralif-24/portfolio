import adapter from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		adapter: adapter({
		runtime: 'nodejs22.x',
	}),
		paths: {
			base: ''
		}
	}
};

export default config;
