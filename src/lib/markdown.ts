import { marked } from 'marked';

marked.use({
    renderer: {
        image(token: any) {
            return `<img src="${token.href}" alt="${token.text}" class="rounded-xl border border-gray-200 shadow-sm max-w-full my-4"/>`;
        },
        link(token: any) {
            const isExternal = token.href?.startsWith('http');
            return `<a href="${token.href}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''} class="text-green-600 hover:text-green-700 hover:underline">${token.text}</a>`;
        },
        heading(token: any) {
            const sizes: Record<number, string> = {
                1: 'text-2xl font-bold text-gray-900 mb-2 mt-0',
                2: 'text-lg font-semibold text-gray-800 mb-3 mt-8',
                3: 'text-base font-semibold text-gray-700 mb-2 mt-6',
            };
            const cls = sizes[token.depth] ?? 'text-sm font-semibold text-gray-700 mb-2 mt-4';
            return `<h${token.depth} class="${cls}">${token.text}</h${token.depth}>`;
        },
        paragraph(token: any) {
            return `<p class="text-gray-500 mb-4 leading-relaxed">${token.text}</p>`;
        },
        list(token: any) {
            const tag = token.ordered ? 'ol' : 'ul';
            const cls = token.ordered
                ? 'list-decimal list-inside space-y-1 mb-4 text-gray-600 text-sm'
                : 'list-disc list-inside space-y-1 mb-4 text-gray-600 text-sm';
            // render items manually since body is not provided
            const items = token.items.map((item: any) =>
                `<li>${item.text}</li>`
            ).join('');
            return `<${tag} class="${cls}">${items}</${tag}>`;
        },
    }
});

export function renderMarkdown(content: string): string {
    return marked.parse(content) as string;
}
