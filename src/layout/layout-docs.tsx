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
            <link rel="stylesheet" href="/css/style.css"/>
            <script defer src="/js/alpine.js"></script>
            <style>{`.transition-all { transition: all 0.3s ease-in-out; }`}</style>
        </head>
        <body>
        <div class="body flex flex-col h-screen overflow-hidden">
            {children}
        </div>
        <script dangerouslySetInnerHTML={{__html: `
            const toggleBtn = document.getElementById("toggleBtn");
            const sidebar = document.getElementById("sidebar");
            let isVisible = true;
            toggleBtn.addEventListener("click", () => {
                isVisible = !isVisible;
                sidebar.classList.toggle("hidden", !isVisible);
            });
            const openBtn = document.getElementById('openSidebar');
            const closeBtn = document.getElementById('closeSidebar');
            const sidebarSmall = document.getElementById('sidebarSmall');
            const overlay = document.getElementById('sidebarOverlay');
            const openBtnHeader = document.getElementById('openSidebarHeader');
            const openMobile = () => { sidebarSmall.classList.remove('-translate-x-full'); overlay.classList.remove('hidden'); };
            const closeMobile = () => { sidebarSmall.classList.add('-translate-x-full'); overlay.classList.add('hidden'); };
            openBtn.onclick = openMobile;
            if (openBtnHeader) openBtnHeader.onclick = openMobile;
            closeBtn.onclick = closeMobile;
            overlay.onclick = closeMobile;
        `}}/>
        </body>
        </html>
    )
}
