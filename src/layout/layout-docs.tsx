import {Lang} from "../model/i18n";
import {CONST} from "../model/const";

export const LayoutDocs = ({children, title, lang}: { children: any, title: string, lang: Lang }) => {
    return (
        <html lang={lang}>
        <head>
            <title>{title}</title>
            <meta charset="utf-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
            <link type="image/x-icon" href={`${CONST.STATIC_PATH}/img/favicon.ico`} rel="shortcut icon"/>
            <script src="https://cdn.tailwindcss.com"></script>
            <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
            <style dangerouslySetInnerHTML={{__html: `
                [x-cloak]{display:none!important}
                
                /* ── prose overrides to match cli-docs style ── */
                .doc-content h1 { font-size: 1.875rem; font-weight: 700; color: #111827; margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px solid #f3f4f6; }
                .doc-content h2 { font-size: 1.25rem; font-weight: 700; color: #111827; margin-top: 2.5rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; }
                .doc-content h2::before { content: ''; display: inline-block; width: 3px; height: 1.1em; background: #16a34a; border-radius: 2px; flex-shrink: 0; }
                .doc-content h3 { font-size: 1rem; font-weight: 600; color: #374151; margin-top: 1.75rem; margin-bottom: 0.5rem; }
                .doc-content p { color: #4b5563; line-height: 1.75; margin-bottom: 1rem; }
                .doc-content a { color: #16a34a; text-decoration: none; }
                .doc-content a:hover { text-decoration: underline; }
                .doc-content ul { list-style: none; padding-left: 0; margin-bottom: 1rem; }
                .doc-content ul li { position: relative; padding-left: 1.25rem; color: #4b5563; margin-bottom: 0.375rem; line-height: 1.7; }
                .doc-content ul li::before { content: ''; position: absolute; left: 0; top: 0.65em; width: 6px; height: 6px; border-radius: 50%; background: #16a34a; }
                .doc-content ol { padding-left: 1.5rem; margin-bottom: 1rem; }
                .doc-content ol li { color: #4b5563; margin-bottom: 0.375rem; line-height: 1.7; }
                .doc-content strong { color: #111827; font-weight: 600; }

                /* inline code */
                .doc-content :not(pre) > code {
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 0.8125rem;
                    background: #f0fdf4;
                    color: #15803d;
                    border: 1px solid #bbf7d0;
                    border-radius: 0.25rem;
                    padding: 0.1em 0.4em;
                }

                /* code blocks */
                .doc-content pre {
                    position: relative;
                    background: #111827;
                    color: #86efac;
                    border-radius: 0.75rem;
                    padding: 1.25rem 1.5rem;
                    overflow-x: auto;
                    margin-bottom: 1.25rem;
                    font-size: 0.875rem;
                    line-height: 1.6;
                }
                .doc-content pre code {
                    background: none;
                    border: none;
                    padding: 0;
                    color: inherit;
                    font-size: inherit;
                }
                .doc-content pre .copy-btn {
                    position: absolute;
                    top: 0.625rem;
                    right: 0.625rem;
                    opacity: 0;
                    transition: opacity 0.15s;
                    padding: 0.25rem 0.5rem;
                    font-size: 0.75rem;
                    background: #374151;
                    color: #d1d5db;
                    border: none;
                    border-radius: 0.375rem;
                    cursor: pointer;
                }
                .doc-content pre:hover .copy-btn { opacity: 1; }
                .doc-content pre .copy-btn:hover { background: #4b5563; }

                /* table */
                .doc-content table { width: 100%; border-collapse: collapse; margin-bottom: 1.25rem; font-size: 0.875rem; }
                .doc-content thead tr { background: #f9fafb; border-bottom: 1px solid #f3f4f6; }
                .doc-content th { padding: 0.75rem 1.25rem; text-align: left; font-size: 0.75rem; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; }
                .doc-content td { padding: 0.75rem 1.25rem; color: #374151; border-bottom: 1px solid #f9fafb; }
                .doc-content tr:hover td { background: #f9fafb; }

                /* blockquote / note */
                .doc-content blockquote {
                    border-left: 3px solid #16a34a;
                    background: #f0fdf4;
                    border-radius: 0 0.5rem 0.5rem 0;
                    padding: 0.875rem 1.25rem;
                    margin: 1.25rem 0;
                    color: #166534;
                }
                .doc-content blockquote p { color: #166534; margin: 0; }

                /* hr */
                .doc-content hr { border: none; border-top: 1px solid #f3f4f6; margin: 2rem 0; }
            `}}/>
        </head>
        <body>
        <div class="body flex flex-col min-h-screen bg-white">
            {children}
        </div>
        <script dangerouslySetInnerHTML={{__html: `
            // Mobile sidebar for doc pages
            const _toggle = document.getElementById('sidebarToggleMobile');
            const _drawer = document.getElementById('docSidebarDrawer');
            const _overlay = document.getElementById('docSidebarOverlay');
            const _close = document.getElementById('docSidebarClose');
            if (_drawer && _overlay) {
                const openDrawer = () => { _drawer.classList.remove('-translate-x-full'); _overlay.classList.remove('hidden'); };
                const closeDrawer = () => { _drawer.classList.add('-translate-x-full'); _overlay.classList.add('hidden'); };
                if (_toggle) _toggle.onclick = openDrawer;
                if (_close) _close.onclick = closeDrawer;
                _overlay.onclick = closeDrawer;
            }

            // Copy button for code blocks
            document.querySelectorAll('.doc-content pre').forEach(pre => {
                const btn = document.createElement('button');
                btn.className = 'copy-btn';
                btn.textContent = 'Copy';
                btn.addEventListener('click', () => {
                    const code = pre.querySelector('code');
                    navigator.clipboard.writeText(code ? code.innerText : pre.innerText);
                    btn.textContent = 'Copied!';
                    setTimeout(() => btn.textContent = 'Copy', 2000);
                });
                pre.appendChild(btn);
            });

            // Right TOC: highlight active heading on scroll
            const tocLinks = document.querySelectorAll('.doc-toc a');
            if (tocLinks.length) {
                const headings = document.querySelectorAll('.doc-content h2, .doc-content h3');
                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            tocLinks.forEach(l => l.classList.remove('text-green-600', 'font-medium'));
                            const active = document.querySelector('.doc-toc a[href="#' + entry.target.id + '"]');
                            if (active) active.classList.add('text-green-600', 'font-medium');
                        }
                    });
                }, { rootMargin: '-20% 0px -70% 0px' });
                headings.forEach(h => observer.observe(h));
            }
        `}}/>
        </body>
        </html>
    )
}
