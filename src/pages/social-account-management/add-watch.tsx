import {Lang} from "../../model/i18n";
import {DocPage} from "../../layout/doc-page";
import {getContent} from "../../lib/content";

const menu = [
    {text: 'Add Watch Account', link: 'add-watch'},
    {text: 'Bind Social & Identity', link: 'bind-social-and-identity'},
]

export const AddWatchAccount = ({lang}: { lang: Lang }) => {
    const html = getContent('social-account-management/add-watch', lang);
    return (
        <DocPage
            title="Add Watch Account — Social Account Management — LifetimeSoft Docs"
            lang={lang}
            html={html}
            mainText="Social Account Management"
            mainLink="/social-account-management"
            menu={menu}
            breadcrumbs={[
                {label: 'Social Account Management', href: `/social-account-management?lang=${lang}`},
                {label: 'Add Watch Account'},
            ]}
        />
    )
}
