<script lang="ts">
    let lang: string = $state('python');
    let code: string = $state(`print("Hello, World!")`);
    let running: boolean = $state(false);
    let output: string = $state('');
    let hasError: boolean = $state(false);

    const COMPILERS: Record<string, string> = {
        go: 'go-1.26',
        rust: 'rust-1.93',
        python: 'python-3.14',
        cpp: 'g++-15',
        typescript: 'typescript-deno',
    };

    const HELLO_WORLD: Record<string, string> = {
        go: 'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, World!")\n}',
        rust: 'fn main() {\n\tprintln!("Hello, World!");\n}',
        python: 'print("Hello, World!")',
        cpp: '#include <iostream>\n\nint main() {\n\tstd::cout << "Hello, World!" << std::endl;\n\treturn 0;\n}',
        typescript: 'console.log("Hello, World!");',
    };

    const LABELS: Record<string, string> = {
        go: 'Go', rust: 'Rust', python: 'Python', cpp: 'C++', typescript: 'TypeScript',
    };

    const LANGUAGES = Object.keys(COMPILERS);

    function switchLang(l: string) {
        lang = l;
        code = HELLO_WORLD[l];
        output = '';
        hasError = false;
    }

    async function run() {
        running = true;
        output = '';
        hasError = false;

        try {
            const res = await fetch('/api/run-code', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ compiler: COMPILERS[lang], code, input: '' }),
            });
            const data = await res.json();
            const combined = [data.error || '', data.output || ''].filter(Boolean).join('\n').trim();
            output = combined || '(no output)';
            if (data.status !== 'success' || data.exit_code !== 0) {
                hasError = true;
            }
        } catch (err: unknown) {
            output = err instanceof Error ? err.message : String(err);
            hasError = true;
        } finally {
            running = false;
        }
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === 'Tab') {
            e.preventDefault();
            const el = e.currentTarget as HTMLTextAreaElement;
            const start = el.selectionStart;
            const end = el.selectionEnd;
            code = code.slice(0, start) + '    ' + code.slice(end);
            requestAnimationFrame(() => {
                el.selectionStart = el.selectionEnd = start + 4;
            });
        }
    }
</script>

<section class="section">
    <div class="section-label">// playground</div>
    <div class="section-title">Run code in the browser</div>
    <p class="section-desc">
        Pick a language, edit the snippet, and hit Run. Executes on
        <a href="https://onlinecompiler.io" target="_blank" rel="noopener noreferrer" class="inline-link">OnlineCompiler.io</a>
        — nothing runs on my machine.
    </p>

    <div class="pg-shell">
        <div class="pg-tabs">
            {#each LANGUAGES as l}
                <button class="pg-tab" class:active={lang === l} onclick={() => switchLang(l)}>
                    {LABELS[l]}
                </button>
            {/each}
        </div>

        <textarea
            class="pg-editor"
            spellcheck="false"
            autocorrect="off"
            autocapitalize="off"
            bind:value={code}
            onkeydown={handleKeydown}
        ></textarea>

        <div class="pg-toolbar">
            <span class="pg-lang-label">{lang}.{lang === 'typescript' ? 'ts' : lang}</span>
            <button class="pg-btn-run" onclick={run} disabled={running}>
                {#if running}
                    Running…
                {:else}
                    Run
                {/if}
            </button>
        </div>

        {#if output}
            <pre class="pg-output" class:has-error={hasError}>{output}</pre>
        {/if}
    </div>
</section>

<style>
    .section {
        padding: 40px 28px;
        border-bottom: 1px solid #21262d;
    }
    .section-label {
        font-family: "JetBrains Mono", monospace;
        font-size: 11px;
        color: #7ee787;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        margin-bottom: 6px;
    }
    .section-title {
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 8px;
        color: #f0f6fc;
    }
    .section-desc {
        font-size: 13px;
        color: #8b949e;
        margin-bottom: 24px;
        line-height: 1.6;
    }
    .inline-link {
        color: #58a6ff;
        text-decoration: none;
    }
    .inline-link:hover {
        text-decoration: underline;
    }

    .pg-shell {
        border: 1px solid #30363d;
        border-radius: 8px;
        overflow: hidden;
        background: #0d1117;
    }

    .pg-tabs {
        display: flex;
        background: #161b22;
        border-bottom: 1px solid #21262d;
        overflow-x: auto;
        scrollbar-width: none;
    }
    .pg-tabs::-webkit-scrollbar { display: none; }
    .pg-tab {
        font-family: "JetBrains Mono", monospace;
        font-size: 12px;
        padding: 9px 16px;
        background: transparent;
        color: #8b949e;
        border: none;
        border-right: 1px solid #21262d;
        cursor: pointer;
        white-space: nowrap;
        transition: color 0.15s, background 0.15s;
    }
    .pg-tab:hover { color: #f0f6fc; background: #1c2128; }
    .pg-tab.active {
        color: #f0f6fc;
        background: #0d1117;
        border-bottom: 2px solid #7ee787;
        margin-bottom: -1px;
    }

    .pg-editor {
        font-family: "JetBrains Mono", monospace;
        font-size: 13px;
        line-height: 1.6;
        color: #e6edf3;
        background: transparent;
        border: none;
        outline: none;
        resize: none;
        width: 100%;
        padding: 16px;
        tab-size: 4;
        min-height: 180px;
        caret-color: #7ee787;
    }
    .pg-editor::selection { background: #388bfd33; }

    .pg-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 14px;
        background: #161b22;
        border-top: 1px solid #21262d;
    }
    .pg-lang-label {
        font-family: "JetBrains Mono", monospace;
        font-size: 11px;
        color: #484f58;
    }
    .pg-btn-run {
        font-family: "JetBrains Mono", monospace;
        font-size: 12px;
        font-weight: 700;
        padding: 6px 16px;
        background: #238636;
        color: #f0f6fc;
        border: 1px solid #2ea043;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.15s;
    }
    .pg-btn-run:hover { background: #2ea043; }
    .pg-btn-run:disabled { opacity: 0.5; cursor: not-allowed; }

    .pg-output {
        font-family: "JetBrains Mono", monospace;
        font-size: 13px;
        line-height: 1.6;
        color: #e6edf3;
        background: #010409;
        padding: 16px;
        margin: 0;
        border-top: 1px solid #21262d;
        min-height: 48px;
        max-height: 200px;
        overflow-y: auto;
        white-space: pre-wrap;
        word-break: break-word;
    }
    .pg-output.has-error { color: #ff7b72; }
</style>
