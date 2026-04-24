import {Lang, t} from "../model/i18n";
import {CONST} from "../model/const";

export const HeaderDocs = ({lang}: { lang: Lang }) => {
    const tr = t(lang)
    const langLabel = lang === 'th' ? 'English' : 'ภาษาไทย'
    const langTarget = lang === 'th' ? 'en' : 'th'

    return (
        <header class="sticky top-0 z-30 w-full bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
            <nav class="max-w-[90rem] mx-auto px-4 h-14 flex items-center gap-4">
                {/* Mobile sidebar toggle */}
                <button id="sidebarToggleMobile"
                        class="lg:hidden flex items-center justify-center w-8 h-8 rounded-md text-gray-400 hover:bg-gray-100 transition-colors shrink-0">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
                    </svg>
                </button>

                {/* Logo */}
                <a href={`/?lang=${lang}`} class="flex items-center gap-2 font-semibold text-gray-900 hover:text-green-700 transition-colors shrink-0">
                    <img src={`${CONST.STATIC_PATH}/img/favicon.png`} class="w-7 h-7" alt="logo"/>
                    <span class="hidden sm:inline text-sm">
                        Lifetime Soft <span class="text-green-600 font-normal">Docs</span>
                    </span>
                </a>

                <div class="flex-1"></div>

                {/* CLI link */}
                <a href={`/cli?lang=${lang}`}
                   class="hidden sm:flex items-center gap-1 text-xs text-gray-400 hover:text-green-600 transition-colors border border-gray-200 rounded-full px-3 py-1.5">
                    <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
                    CLI
                </a>

                {/* Lang toggle */}
                <a href={`?lang=${langTarget}`}
                   class="text-xs border border-gray-300 rounded-full px-3 py-1.5 text-gray-600 hover:border-green-700 hover:text-green-700 transition-colors">
                    {langLabel}
                </a>

                {/* Launch app */}
                <a href="https://app.lifetimesoft.com/"
                   class="text-sm border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors rounded-full px-4 py-1.5 font-medium hidden sm:block">
                    {tr.launchApp}
                </a>
            </nav>
        </header>
    )
}
