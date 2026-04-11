import {Lang} from "../model/i18n";
import {CONST} from "../model/const";

export const Layout = ({children, title, lang}: { children: any, title: string, lang: Lang }) => {
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
        </head>
        <body>
        <div class="body flex flex-col min-h-screen">
            {children}
        </div>
        <script dangerouslySetInnerHTML={{__html: `document.getElementById('footer-year').textContent = new Date().getFullYear();`}}/>
        </body>
        </html>
    )
}
