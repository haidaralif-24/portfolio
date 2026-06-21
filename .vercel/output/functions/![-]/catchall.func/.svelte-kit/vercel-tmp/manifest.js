export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.B7U6tXpN.js",app:"_app/immutable/entry/app.qzT3OBKa.js",imports:["_app/immutable/entry/start.B7U6tXpN.js","_app/immutable/chunks/CasyMgqn.js","_app/immutable/chunks/BxMq_41h.js","_app/immutable/entry/app.qzT3OBKa.js","_app/immutable/chunks/BxMq_41h.js","_app/immutable/chunks/kNaey6uv.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/api/run-code",
				pattern: /^\/api\/run-code\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/run-code/_server.ts.js'))
			}
		],
		prerendered_routes: new Set(["/","/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
