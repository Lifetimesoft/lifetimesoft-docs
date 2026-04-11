import { marked } from 'marked';

// Only override image and link — let prose handle everything else
marked.use({
    renderer: {
        image(token: any) {
            return `<img src="${token.href}" alt="${token.text}" style="border-radius:0.75rem;border:1px solid #e5e7eb;box-shadow:0 1px 2px 0 rgb(0 0 0/0.05);max-width:100%;margin:1rem 0"/>`;
        },
        link(token: any) {
            const isExternal = token.href?.startsWith('http');
            return `<a href="${token.href}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''} style="color:#16a34a;text-decoration:underline">${token.text}</a>`;
        },
    }
});

export function renderMarkdown(content: string): string {
    return marked.parse(content) as string;
}
