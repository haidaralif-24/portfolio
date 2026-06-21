import "../../chunks/index-server.js";
import { b as attr, i as ensure_array_like, n as attr_style, s as stringify, t as attr_class, x as escape_html } from "../../chunks/server.js";
//#region src/lib/components/Nav.svelte
function Nav($$renderer) {
	$$renderer.push(`<nav class="nav svelte-1h32yp1"><span class="nav-logo mono svelte-1h32yp1">~/portfolio <span class="accent">$</span></span></nav>`);
}
//#endregion
//#region src/lib/components/Hero.svelte
function Hero($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const phrases = [
			"building things that scale.",
			"writing Go that ships.",
			"thinking in systems.",
			"exploring AI pipelines."
		];
		let pi = 0;
		let ci = 0;
		let del = false;
		let typedText = "";
		function type() {
			const phrase = phrases[pi];
			if (!del) {
				typedText = phrase.slice(0, ++ci);
				if (ci === phrase.length) {
					del = true;
					setTimeout(type, 1800);
					return;
				}
				setTimeout(type, 60);
			} else {
				typedText = phrase.slice(0, --ci);
				if (ci === 0) {
					del = false;
					pi = (pi + 1) % phrases.length;
					setTimeout(type, 300);
					return;
				}
				setTimeout(type, 30);
			}
		}
		$$renderer.push(`<section class="hero svelte-1q37ri0"><div class="hero-eyebrow svelte-1q37ri0">Available for learning more</div> <div class="hero-name svelte-1q37ri0">Haidar Ali Fawwaz Nasirodin</div> <div class="hero-terminal mono svelte-1q37ri0" id="terminal"><span>${escape_html(typedText)}</span><span class="cursor svelte-1q37ri0"></span></div> <p class="hero-desc svelte-1q37ri0">I'm a student who is interested to pursue Software/AI Engineering.
		Planning to take CS in University. I love to build systems that can
		genuinely help people behind the scenes, not just fancy appearance.</p> <div class="badge-row svelte-1q37ri0"><span class="badge badge-go svelte-1q37ri0">Go</span> <span class="badge badge-rust svelte-1q37ri0">Rust</span> <span class="badge badge-py svelte-1q37ri0">Python</span> <span class="badge badge-ts svelte-1q37ri0">TypeScript</span> <span class="badge badge-cpp svelte-1q37ri0">C++</span></div> <div class="hero-btns svelte-1q37ri0"><a class="btn-primary svelte-1q37ri0" href="https://github.com/haidaralif-24" target="_blank" rel="noopener noreferrer">View on GitHub</a></div></section>`);
	});
}
//#endregion
//#region src/lib/components/FocusAreas.svelte
function FocusAreas($$renderer) {
	$$renderer.push(`<section class="section svelte-12mzitq"><div class="section-label svelte-12mzitq">// focus areas</div> <div class="section-title svelte-12mzitq">What I actually learn and build</div> <div class="focus-grid svelte-12mzitq"><div class="focus-card svelte-12mzitq"><div class="focus-icon svelte-12mzitq" aria-hidden="true"><i class="ti ti-server" style="font-size:22px;color:#7EE787"></i></div> <div class="focus-name svelte-12mzitq">Backend Systems</div> <div class="focus-desc svelte-12mzitq">REST/gRPC APIs, microservices, database design, message queues.
				Go and Python are home turf.</div> <div class="focus-tag svelte-12mzitq">Go · Python · Postgres · Redis</div></div> <div class="focus-card svelte-12mzitq"><div class="focus-icon svelte-12mzitq" aria-hidden="true"><i class="ti ti-cpu" style="font-size:22px;color:#FF8552"></i></div> <div class="focus-name svelte-12mzitq">Systems Programming</div> <div class="focus-desc svelte-12mzitq">Low-level work where performance and memory matter. CLI tools,
				runtimes, data structures.</div> <div class="focus-tag svelte-12mzitq">Rust · Linux</div></div> <div class="focus-card svelte-12mzitq"><div class="focus-icon svelte-12mzitq" aria-hidden="true"><i class="ti ti-brain" style="font-size:22px;color:#60A5FA"></i></div> <div class="focus-name svelte-12mzitq">AI &amp; ML Engineering</div> <div class="focus-desc svelte-12mzitq">LLM integrations, inference pipelines, RAG systems, fine-tuning
				workflows, and model serving.</div> <div class="focus-tag svelte-12mzitq">Python · PyTorch · LangChain</div></div> <div class="focus-card svelte-12mzitq"><div class="focus-icon svelte-12mzitq" aria-hidden="true"><i class="ti ti-trophy" style="font-size:22px;color:#A78BFA"></i></div> <div class="focus-name svelte-12mzitq">Competitive Programming</div> <div class="focus-desc svelte-12mzitq">Algorithm design and optimization under pressure. Data
				structures, graph theory, DP, and geometry. Mostly for OSN
				Informatics</div> <div class="focus-tag svelte-12mzitq">C++</div></div></div></section>`);
}
//#endregion
//#region src/lib/components/Repositories.svelte
function Repositories($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { repos, langColors } = $$props;
		$$renderer.push(`<section class="section svelte-c98cz4"><div class="section-label svelte-c98cz4">// github</div> <div class="section-title svelte-c98cz4">Selected repositories</div> <div class="repo-list svelte-c98cz4"><!--[-->`);
		const each_array = ensure_array_like(repos);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let repo = each_array[$$index];
			$$renderer.push(`<div class="repo-card svelte-c98cz4"><div class="repo-left"><div class="repo-name svelte-c98cz4"><i class="ti ti-book" style="font-size:13px;vertical-align:-1px;margin-right:5px" aria-hidden="true"></i> <a${attr("href", repo.html_url)} target="_blank" rel="noopener noreferrer" class="svelte-c98cz4">${escape_html(repo.name)}</a></div> <div class="repo-desc svelte-c98cz4">${escape_html(repo.description || "No description")}</div> <div class="repo-meta svelte-c98cz4">`);
			if (repo.language) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="repo-lang svelte-c98cz4"><span class="lang-dot svelte-c98cz4"${attr_style(`background: ${stringify(langColors[repo.language] || "#8B949E")}`)}></span> ${escape_html(repo.language)}</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> <span class="repo-stars svelte-c98cz4"><i class="ti ti-star" style="font-size:12px;vertical-align:-1px" aria-hidden="true"></i> ${escape_html(repo.stargazers_count)}</span></div></div> `);
			if (repo.topics && repo.topics.length > 0) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="repo-badge svelte-c98cz4">${escape_html(repo.topics[0])}</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div></section>`);
	});
}
//#endregion
//#region src/lib/components/Playground.svelte
function Playground($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let lang = "python";
		let code = `print("Hello, World!")`;
		let running = false;
		const COMPILERS = {
			go: "go-1.26",
			rust: "rust-1.93",
			python: "python-3.14",
			cpp: "g++-15",
			typescript: "typescript-deno"
		};
		const LABELS = {
			go: "Go",
			rust: "Rust",
			python: "Python",
			cpp: "C++",
			typescript: "TypeScript"
		};
		const LANGUAGES = Object.keys(COMPILERS);
		$$renderer.push(`<section class="section svelte-5rwdjv"><div class="section-label svelte-5rwdjv">// playground</div> <div class="section-title svelte-5rwdjv">Run code in the browser</div> <p class="section-desc svelte-5rwdjv">Pick a language, edit the snippet, and hit Run. Executes on <a href="https://onlinecompiler.io" target="_blank" rel="noopener noreferrer" class="inline-link svelte-5rwdjv">OnlineCompiler.io</a> — nothing runs on my machine.</p> <div class="pg-shell svelte-5rwdjv"><div class="pg-tabs svelte-5rwdjv"><!--[-->`);
		const each_array = ensure_array_like(LANGUAGES);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let l = each_array[$$index];
			$$renderer.push(`<button${attr_class("pg-tab svelte-5rwdjv", void 0, { "active": lang === l })}>${escape_html(LABELS[l])}</button>`);
		}
		$$renderer.push(`<!--]--></div> <textarea class="pg-editor svelte-5rwdjv" spellcheck="false" autocorrect="off" autocapitalize="off">`);
		const $$body = escape_html(code);
		if ($$body) $$renderer.push(`${$$body}`);
		$$renderer.push(`</textarea> <div class="pg-toolbar svelte-5rwdjv"><span class="pg-lang-label svelte-5rwdjv">${escape_html(lang)}.${escape_html(lang)}</span> <button class="pg-btn-run svelte-5rwdjv"${attr("disabled", running, true)}>`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`Run`);
		$$renderer.push(`<!--]--></button></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></section>`);
	});
}
//#endregion
//#region src/lib/components/About.svelte
function About($$renderer) {
	$$renderer.push(`<section class="section svelte-7hpc9t"><div class="section-label svelte-7hpc9t">// about</div> <div class="section-title svelte-7hpc9t">Background</div> <div class="about-grid svelte-7hpc9t"><div class="about-block svelte-7hpc9t"><div class="about-block-title svelte-7hpc9t">experience</div> <div class="about-item svelte-7hpc9t"><span>Current role</span><span class="about-val svelte-7hpc9t">Student at Global Darussalam Academy</span></div> <div class="about-item svelte-7hpc9t"><span>Years coding</span><span class="about-val svelte-7hpc9t">±1 Year</span></div> <div class="about-item svelte-7hpc9t"><span>Location</span><span class="about-val svelte-7hpc9t">Indonesia</span></div> <div class="about-item svelte-7hpc9t"><span>Open to</span><span class="about-val svelte-7hpc9t">Occasional Commision</span></div></div> <div class="about-block svelte-7hpc9t"><div class="about-block-title svelte-7hpc9t">interests</div> <div class="about-item svelte-7hpc9t"><span>Backend Engineering</span><span class="about-val svelte-7hpc9t">✓</span></div> <div class="about-item svelte-7hpc9t"><span>AI/ML Engineering</span><span class="about-val svelte-7hpc9t">✓</span></div> <div class="about-item svelte-7hpc9t"><span>System programming</span><span class="about-val svelte-7hpc9t">✓</span></div> <div class="about-item svelte-7hpc9t"><span>Linux</span><span class="about-val svelte-7hpc9t">✓</span></div> <div class="about-item svelte-7hpc9t"><span>Open source</span><span class="about-val svelte-7hpc9t">✓</span></div></div></div></section>`);
}
//#endregion
//#region src/lib/components/Contact.svelte
function Contact($$renderer) {
	$$renderer.push(`<section class="section svelte-wt4tt0"><div class="section-label svelte-wt4tt0">// contact</div> <div class="section-title svelte-wt4tt0">Get in touch</div> <div class="contact-row svelte-wt4tt0"><a class="contact-link svelte-wt4tt0" href="https://github.com/haidaralif-24" target="_blank" rel="noopener noreferrer"><i class="ti ti-brand-github svelte-wt4tt0" aria-hidden="true"></i>GitHub</a> <a class="contact-link svelte-wt4tt0" href="https://linkedin.com/in/haidaralif-24" target="_blank" rel="noopener noreferrer"><i class="ti ti-brand-linkedin svelte-wt4tt0" aria-hidden="true"></i>LinkedIn</a> <a class="contact-link svelte-wt4tt0" href="mailto:haidaralifawwaz@gmail.com"><i class="ti ti-mail svelte-wt4tt0" aria-hidden="true"></i>Email</a> <a class="contact-link svelte-wt4tt0" href="https://twitter.com/haidaralif_24" target="_blank" rel="noopener noreferrer"><i class="ti ti-brand-twitter svelte-wt4tt0" aria-hidden="true"></i>Twitter / X</a></div></section>`);
}
//#endregion
//#region src/lib/components/Footer.svelte
function Footer($$renderer) {
	$$renderer.push(`<footer class="footer svelte-jz8lnl"><span class="footer-text svelte-jz8lnl">built with intention, not a template</span> <div class="footer-status svelte-jz8lnl"><span class="status-dot svelte-jz8lnl"></span>open to opportunities</div></footer>`);
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		Nav($$renderer, {});
		$$renderer.push(`<!----> `);
		Hero($$renderer, {});
		$$renderer.push(`<!----> `);
		FocusAreas($$renderer, {});
		$$renderer.push(`<!----> `);
		Repositories($$renderer, {
			repos: data.repos,
			langColors: data.langColors
		});
		$$renderer.push(`<!----> `);
		Playground($$renderer, {});
		$$renderer.push(`<!----> `);
		About($$renderer, {});
		$$renderer.push(`<!----> `);
		Contact($$renderer, {});
		$$renderer.push(`<!----> `);
		Footer($$renderer, {});
		$$renderer.push(`<!---->`);
	});
}
//#endregion
export { _page as default };
