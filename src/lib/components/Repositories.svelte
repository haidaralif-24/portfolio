<script lang="ts">
	let { repos, langColors }: { repos: { name: string; html_url: string; description: string | null; language: string | null; stargazers_count: number; topics: string[] }[]; langColors: Record<string, string> } = $props();
</script>

<section class="section">
	<div class="section-label">// github</div>
	<div class="section-title">Selected repositories</div>
	<div class="repo-list">
		{#each repos as repo}
			<div class="repo-card">
				<div class="repo-left">
					<div class="repo-name">
						<i class="ti ti-book" style="font-size:13px;vertical-align:-1px;margin-right:5px" aria-hidden="true"></i>
						<a href={repo.html_url} target="_blank" rel="noopener noreferrer">
							{repo.name}
						</a>
					</div>
					<div class="repo-desc">
						{repo.description || 'No description'}
					</div>
					<div class="repo-meta">
						{#if repo.language}
							<span class="repo-lang">
								<span class="lang-dot" style="background: {langColors[repo.language] || '#8B949E'}"></span>
								{repo.language}
							</span>
						{/if}
						<span class="repo-stars">
							<i class="ti ti-star" style="font-size:12px;vertical-align:-1px" aria-hidden="true"></i>
							{repo.stargazers_count}
						</span>
					</div>
				</div>
				{#if repo.topics && repo.topics.length > 0}
					<span class="repo-badge">{repo.topics[0]}</span>
				{/if}
			</div>
		{/each}
	</div>
</section>

<style>
	.section {
		padding: 40px 28px;
		border-bottom: 1px solid #21262d;
	}
	.section-label {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		color: #7ee787;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		margin-bottom: 6px;
	}
	.section-title {
		font-size: 22px;
		font-weight: 500;
		margin-bottom: 24px;
		color: #f0f6fc;
	}
	.repo-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.repo-card {
		background: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		padding: 16px 18px;
		display: flex;
		justify-content: space-between;
		align-items: start;
	}
	.repo-name {
		font-family: 'JetBrains Mono', monospace;
		font-size: 13px;
		margin-bottom: 5px;
	}
	.repo-name a {
		color: #58a6ff;
		text-decoration: none;
	}
	.repo-name a:hover {
		text-decoration: underline;
	}
	.repo-desc {
		font-size: 12px;
		color: #8b949e;
		line-height: 1.5;
		margin-bottom: 10px;
		max-width: 340px;
	}
	.repo-meta {
		display: flex;
		gap: 14px;
		align-items: center;
	}
	.repo-lang {
		display: flex;
		align-items: center;
		gap: 5px;
		font-size: 11px;
		color: #8b949e;
	}
	.lang-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		display: inline-block;
	}
	.repo-stars {
		font-size: 11px;
		color: #8b949e;
	}
	.repo-badge {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		padding: 2px 7px;
		border-radius: 3px;
		background: #21262d;
		color: #8b949e;
		border: 1px solid #30363d;
		white-space: nowrap;
	}
</style>
