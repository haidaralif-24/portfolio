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
		client: {start:"_app/immutable/entry/start.CfuKvvRY.js",app:"_app/immutable/entry/app.dbWGpQDA.js",imports:["_app/immutable/entry/start.CfuKvvRY.js","_app/immutable/chunks/TgzwyGOo.js","_app/immutable/chunks/BxMq_41h.js","_app/immutable/entry/app.dbWGpQDA.js","_app/immutable/chunks/BxMq_41h.js","_app/immutable/chunks/kNaey6uv.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/api/run-code",
				pattern: /^\/api\/run-code\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/run-code/_server.ts.js'))
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
