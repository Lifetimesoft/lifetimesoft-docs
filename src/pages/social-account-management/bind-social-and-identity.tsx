import {Lang, t} from "../../model/i18n";
import {LayoutDocs} from "../../layout/layout-docs";
import {HeaderDocs} from "../../layout/header-docs";
import {Sidebar} from "../../layout/sidebar";
import {Toolbar} from "../../layout/toolbar";
import {getContent} from "../../lib/content";

const menu = [
    {text: 'Add Watch Account', link: 'add-watch'},
    {text: 'Bind Social & Identity', link: 'bind-social-and-identity'},
]

export const BindSocialAndIdentity = ({lang}: { lang: Lang }) => {
    const html = getContent('social-account-management/bind-social-and-identity', lang);
    return (
        <LayoutDocs title="Bind Social & Identity Account - Social Account Management - LifetimeSoft" lang={lang}>
            <HeaderDocs lang={lang}/>
            <div class="flex flex-row flex-grow overflow-hidden">
                <Sidebar mainText="Social Account Management" mainLink="/social-account-management" menu={menu} lang={lang}/>
                <div class="flex flex-col flex-grow min-w-0">
                    <Toolbar breadcrumbs={[
                        {label: 'Social Account Management', href: `/social-account-management?lang=${lang}`},
                        {label: 'Bind Social & Identity'}
                    ]}/>
                    <div class="flex-grow overflow-y-auto w-full">
                        <div class="w-full px-10 py-10 pb-16 prose prose-green max-w-none"
                             style="max-width:none"
                             dangerouslySetInnerHTML={{__html: html}}/>
                    </div>
                </div>
            </div>
        </LayoutDocs>
    )
}
