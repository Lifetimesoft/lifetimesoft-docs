import {Lang, t} from "../model/i18n";
import {CONST} from "../model/const";

export const Header = ({lang}: { lang: Lang }) => {
    const tr = t(lang)
    return (
        <header class="sticky top-0 z-30 w-full bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
            <nav class="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
                <a href={`/?lang=${lang}`} class="flex items-center gap-2 font-semibold text-gray-900 hover:text-green-700 transition-colors">
                    <img src={`${CONST.STATIC_PATH}/img/favicon.png`} class="w-8 h-8" alt="logo"/>
                    <span class="hidden sm:inline">Lifetime Soft <span class="text-green-600 font-normal">Docs</span></span>
                </a>
                <div class="flex items-center gap-2">
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
