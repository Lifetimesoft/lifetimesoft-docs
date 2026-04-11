import {Lang} from "../model/i18n";

type MenuItem = { text: string, link: string }

export const Sidebar = ({mainText, mainLink, menu, lang}: {
    mainText: string,
    mainLink: string,
    menu: MenuItem[],
    lang: Lang
}) => {
    const menuItems = menu.map(item => (
        <a href={`${mainLink}/${item.link}?lang=${lang}`}
           class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors">
            <svg class="w-3.5 h-3.5 shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m9 18 6-6-6-6"/>
            </svg>
            {item.text}
        </a>
    ))

    return (
        <>
            {/* Desktop Sidebar */}
            <aside id="sidebar" class="hidden lg:flex flex-col w-64 shrink-0 border-r border-gray-100 bg-gray-50/50 h-[calc(100vh-56px)] overflow-y-auto transition-all duration-300">
                <div class="p-4 border-b border-gray-100">
                    <a href={`${mainLink}?lang=${lang}`} class="font-semibold text-gray-800 hover:text-green-700 transition-colors text-sm leading-snug block">
                        {mainText}
                    </a>
                </div>
                <nav class="p-3 flex flex-col gap-0.5">
                    {menuItems}
                </nav>
            </aside>

            {/* Overlay */}
            <div id="sidebarOverlay" class="fixed inset-0 bg-black/40 z-40 hidden"></div>

            {/* Mobile Sidebar */}
            <div id="sidebarSmall" class="fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform -translate-x-full transition-transform duration-300 z-50 flex flex-col">
                <div class="p-4 flex justify-between items-center border-b border-gray-100">
                    <a class="font-semibold text-gray-800 text-sm" href={`${mainLink}?lang=${lang}`}>{mainText}</a>
                    <button id="closeSidebar" class="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors text-xl leading-none">&times;</button>
                </div>
                <nav class="p-3 flex flex-col gap-0.5 overflow-y-auto">
                    {menuItems}
                </nav>
            </div>
        </>
    )
}
