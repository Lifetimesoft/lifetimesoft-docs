import {Lang, t} from "../model/i18n";
import {CONST} from "../model/const";

export const HeaderDocs = ({lang}: { lang: Lang }) => {
    const tr = t(lang)
    return (
        <header class="sticky top-0 z-30 w-full bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
            <nav class="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
                <a href={`/?lang=${lang}`} class="flex items-center gap-2 font-semibold text-gray-900 hover:text-green-700 transition-colors">
                    <img src={`${CONST.STATIC_PATH}/img/favicon.png`} class="w-8 h-8" alt="logo"/>
                    <span class="hidden sm:inline">Lifetime Soft <span class="text-green-600 font-normal">Docs</span></span>
                </a>
                <div class="flex items-center gap-2">
                    <button id="openSidebarHeader" type="button"
                        class="sm:hidden p-1.5 rounded-md text-gray-500 hover:bg-gray-100 transition-colors"
                        aria-label="Toggle navigation">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/>
                        </svg>
                    </button>
                    <a href={`?lang=${tr.navLangCode}`}
                       class="text-xs border border-gray-300 rounded-full px-3 py-1.5 text-gray-600 hover:border-green-700 hover:text-green-700 transition-colors">
                        {tr.navLang}
                    </a>
                    <a href="https://app.lifetimesoft.com/"
                       class="text-sm border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors rounded-full px-4 py-1.5 font-medium">
                        {tr.launchApp}
                    </a>
                </div>
            </nav>
        </header>
    )
}
