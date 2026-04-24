import {Lang} from "../model/i18n";
import {LayoutDocs} from "./layout-docs";
import {HeaderDocs} from "./header-docs";
import {Footer} from "./footer";
import {CONST} from "../model/const";

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

    const navContent = (
        <nav class="p-3 flex flex-col gap-1">
            {/* Back to docs home */}
            <div class="px-3 mb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Navigation</div>
            <a href={`/?lang=${lang}`}
               class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors">
                <svg class="w-3.5 h-3.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m15 18-6-6 6-6"/>
                </svg>
                {isEn ? 'Docs Home' : 'หน้าหลัก'}
            </a>

            {/* Current section */}
            <div class="px-3 mt-3 mb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">{mainText}</div>
            <a href={`${mainLink}?lang=${lang}`}
               class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors font-medium">
                <svg class="w-3.5 h-3.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                {isEn ? 'Overview' : 'ภาพรวม'}
            </a>
            {menu.map(item => (
                <a href={`${mainLink}/${item.link}?lang=${lang}`}
                   class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors">
                    <svg class="w-3 h-3 shrink-0 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="m9 18 6-6-6-6"/>
                    </svg>
                    {item.text}
                </a>
            ))}
        </nav>
    )

    return (
        <LayoutDocs title={title} lang={lang}>
            <HeaderDocs lang={lang}/>

            <div class="flex flex-1 max-w-[90rem] mx-auto w-full">
                {/* Desktop Sidebar */}
                <aside id="docSidebar"
                       class="hidden lg:flex flex-col w-56 shrink-0 border-r border-gray-100 bg-gray-50/50 h-[calc(100vh-56px)] overflow-y-auto sticky top-14">
                    {navContent}
                </aside>

                {/* Mobile overlay */}
                <div id="docSidebarOverlay" class="fixed inset-0 bg-black/40 z-40 hidden lg:hidden"></div>

                {/* Mobile drawer */}
                <div id="docSidebarDrawer"
                     class="fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform -translate-x-full transition-transform duration-300 z-50 flex flex-col lg:hidden overflow-y-auto">
                    <div class="p-4 flex justify-between items-center border-b border-gray-100">
                        <span class="font-semibold text-sm text-gray-800">{mainText}</span>
                        <button id="docSidebarClose" class="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors text-xl leading-none">&times;</button>
                    </div>
                    {navContent}
                </div>

                {/* Main content */}
                <main class="flex-1 min-w-0 px-6 py-8 max-w-4xl">
                    {/* Breadcrumb */}
                    <nav class="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
                        <a href={`/?lang=${lang}`} class="hover:text-green-600 transition-colors">{isEn ? 'Docs' : 'เอกสาร'}</a>
                        {breadcrumbs.map((item, i) => (
                            <>
                                <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
                                {item.href
                                    ? <a href={item.href} class="hover:text-green-600 transition-colors">{item.label}</a>
                                    : <span class="font-medium text-gray-700">{item.label}</span>
                                }
                            </>
                        ))}
                    </nav>

                    {/* Content */}
                    <div class="doc-content max-w-3xl"
                         dangerouslySetInnerHTML={{__html: processedHtml}}/>
                </main>

                {/* Right TOC */}
                {headings.length > 0 && (
                    <aside class="hidden xl:block w-52 shrink-0 py-8 pr-4">
                        <div class="sticky top-20">
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

            <Footer lang={lang}/>
        </LayoutDocs>
    )
}
