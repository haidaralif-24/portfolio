import type { PageServerLoad } from './$types';

interface Repo {
	name: string;
	html_url: string;
	description: string | null;
	language: string | null;
	stargazers_count: number;
	topics: string[];
}

const langColors: Record<string, string> = {
	Go: '#00ACD7',
	Python: '#3776AB',
	Rust: '#CE422B',
	TypeScript: '#3178C6',
	JavaScript: '#F7DF1E',
	C: '#A8B9CC',
	'C++': '#6E40C9',
	HTML: '#E34F26',
	CSS: '#563D7C',
	Java: '#B07219',
	Shell: '#89E051',
	Jupyter: '#DA5B0F',
	PHP: '#4F5D95',
	Ruby: '#701516',
};

export const load: PageServerLoad = async () => {
	let repos: Repo[] = [];
	try {
		const res = await fetch(
			'https://api.github.com/users/haidaralif-24/repos?sort=stars&direction=desc&per_page=100',
		);
		const all: Repo[] = await res.json();
		repos = all.filter((r) => r.stargazers_count > 0).slice(0, 3);
	} catch {}

	return { repos, langColors };
};
