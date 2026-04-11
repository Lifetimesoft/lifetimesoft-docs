import {Lang} from "../../model/i18n";
import {LayoutDocs} from "../../layout/layout-docs";
import {HeaderDocs} from "../../layout/header-docs";
import {Sidebar} from "../../layout/sidebar";
import {Toolbar} from "../../layout/toolbar";
import {getContent} from "../../lib/content";

const menu = [
    {text: 'Add Identity Account', link: 'add-account'}
]

export const AddIdentityAccount = ({lang}: { lang: Lang }) => {
    const html = getContent('identity-account-management/add-account', lang);
    return (
        <LayoutDocs title="Add Identity Account - Identity Account Management - LifetimeSoft" lang={lang}>
            <HeaderDocs lang={lang}/>
            <div class="flex flex-row flex-grow overflow-hidden">
                <Sidebar mainText="Identity Account Management" mainLink="/identity-account-management" menu={menu} lang={lang}/>
                <div class="flex flex-col flex-grow min-w-0">
                    <Toolbar breadcrumbs={[
                        {label: 'Identity Account Management', href: `/identity-account-management?lang=${lang}`},
                        {label: 'Add Identity Account'}
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
