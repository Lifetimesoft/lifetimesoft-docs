import { marked } from 'marked';
import type { Lang } from '../model/i18n';

// Custom renderer with Tailwind classes
const renderer = new marked.Renderer();

renderer.image = ({ href, text }: { href: string, text: string }) => {
    return `<img src="${href}" alt="${text}" class="rounded-xl border border-gray-200 shadow-sm max-w-full my-4"/>`;
};

renderer.link = ({ href, text }: { href: string, text: string }) => {
    const isExternal = href?.startsWith('http');
    return `<a href="${href}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''} class="text-green-600 hover:text-green-700 hover:underline">${text}</a>`;
};

renderer.heading = ({ text, depth }: { text: string, depth: number }) => {
    const sizes: Record<number, string> = {
        1: 'text-2xl font-bold text-gray-900 mb-2 mt-0',
        2: 'text-lg font-semibold text-gray-800 mb-3 mt-8',
        3: 'text-base font-semibold text-gray-700 mb-2 mt-6',
    };
    const cls = sizes[depth] || 'text-sm font-semibold text-gray-700 mb-2 mt-4';
    return `<h${depth} class="${cls}">${text}</h${depth}>`;
};

renderer.paragraph = ({ text }: { text: string }) => {
    return `<p class="text-gray-500 mb-4 leading-relaxed">${text}</p>`;
};

renderer.list = ({ body, ordered }: { body: string, ordered: boolean }) => {
    const tag = ordered ? 'ol' : 'ul';
    const cls = ordered
        ? 'list-decimal list-inside space-y-1 mb-4 text-gray-600'
        : 'list-disc list-inside space-y-1 mb-4 text-gray-600';
    return `<${tag} class="${cls}">${body}</${tag}>`;
};

renderer.listitem = ({ text }: { text: string }) => {
    return `<li class="text-sm">${text}</li>`;
};

marked.setOptions({ renderer });

export function renderMarkdown(content: string): string {
    return marked.parse(content) as string;
}
