import {Lang} from "../model/i18n";
import {LayoutDocs} from "./layout-docs";
import {HeaderDocs} from "./header-docs";
import {Sidebar} from "./sidebar";
import {Toolbar} from "./toolbar";
import {Footer} from "./footer";

type BreadcrumbItem = { label: string; href?: string }
type MenuItem = { text: string; link: string }

// Extract h2/h3 headings from rendered HTML for right TOC
function extractHeadings(html: string): { id: string; text: string; level: number }[] {
    const headings: { id: string; text: string; level: number }[] = []
    const re = /<h([23])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h[23]>/gi
    let m: RegExpExecArray | null
    while ((m = re.exec(html)) !== null) {
        const text = m[3].replace(/<[^>]+>/g, '').trim()
        if (text) headings.push({ level: parseInt(m[1]), id: m[2], text })
    }
    return headings
}

// Inject id attributes into h2/h3 that don't have one
function injectHeadingIds(html: string): string {
    let counter = 0
    return html.replace(/<h([23])([^>]*)>(.*?)<\/h[23]>/gi, (match, level, attrs, inner) => {
        if (/id="/i.test(attrs)) return match
        const text = inner.replace(/<[^>]+>/g, '').trim()
        const id = text.toLowerCase().replace(/[^a-z0-9\u0E00-\u0E7F]+/g, '-').replace(/^-|-$/g, '') || `heading-${++counter}`
        return `<h${level}${attrs} id="${id}">${inner}</h${level}>`
    })
}

export const DocPage = ({
    title, lang, html,
    mainText, mainLink, menu,
    breadcrumbs,
}: {
    title: string
    lang: Lang
    html: string
    mainText: string
    mainLink: string
    menu: MenuItem[]
    breadcrumbs: BreadcrumbItem[]
}) => {
    const processedHtml = injectHeadingIds(html)
    const headings = extractHeadings(processedHtml)
    const isEn = lang === 'en'

    return (
        <LayoutDocs title={title} lang={lang}>
            <HeaderDocs lang={lang}/>
            <div class="flex flex-row flex-grow overflow-hidden">
                <Sidebar mainText={mainText} mainLink={mainLink} menu={menu} lang={lang}/>

                {/* Main scrollable area */}
                <div class="flex flex-col flex-grow min-w-0 overflow-hidden">
                    <Toolbar breadcrumbs={breadcrumbs}/>

                    <div class="flex flex-grow overflow-y-auto">
                        {/* Content */}
                        <main class="flex-1 min-w-0 px-8 py-8 pb-16">
                            <div class="doc-content max-w-3xl"
                                 dangerouslySetInnerHTML={{__html: processedHtml}}/>
                        </main>

                        {/* Right TOC */}
                        {headings.length > 0 && (
                            <aside class="hidden xl:block w-52 shrink-0 py-8 pr-6">
                                <div class="sticky top-4">
                                    <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                                        {isEn ? 'On this page' : 'ในหน้านี้'}
                                    </p>
                                    <nav class="doc-toc flex flex-col gap-1">
                                        {headings.map(h => (
                                            <a href={`#${h.id}`}
                                               class={`text-xs text-gray-500 hover:text-green-600 transition-colors py-0.5 ${h.level === 3 ? 'pl-3' : ''}`}>
                                                {h.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </aside>
                        )}
                    </div>
                </div>
            </div>
        </LayoutDocs>
    )
}
